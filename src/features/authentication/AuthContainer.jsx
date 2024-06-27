import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const {
    data: otpResponse,
    isPending: isSendingOtp,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const { register, handleSubmit, getValues } = useForm();

  const sendOtpHandler = async (data) => {
    // console.log(data);
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            register={register}
            // phoneNumber={phoneNumber}
            // setPhoneNumber={setPhoneNumber}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onResendOtp={handleSubmit(sendOtpHandler)}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((step) => step - 1)}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}
export default AuthContainer;
