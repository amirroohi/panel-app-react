import { useState } from "react";
import TextField from "../ui/TextField";
import RadioInput from "../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../ui/Loading";
import { useForm } from "react-hook-form";

function CompleteProfileForm() {
  const { register, handleSubmit, getValues ,watch} = useForm();

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const { data, error, isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center">
        <div className="w-full sm:max-w-sm">
          <form className="space-y-8 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="نام و نام خانوادگی"
              name="name"
              register={register}
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="ایمیل"
              name="email"
              register={register}
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex items-center justify-around">
              <RadioInput
                label="کارفرما"
                name="role"
                register={register}
                value="OWNER"
                id="OWNER"
                // onChange={(e) => setRole(e.target.value)}
                checked={watch("role") === "OWNER"}
              />
              <RadioInput
                label="فریلنسر"
                name="role"
                value="FREELANCER"
                id="FREELANCER"
                // onChange={(e) => setRole(e.target.value)}
                checked={watch("role") === "FREELANCER"}
              />
            </div>
            <div>
              {isPending ? (
                <Loading />
              ) : (
                <button type="submit" className="btn btn--primary w-full">
                  تایید
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CompleteProfileForm;
