import { useState } from "react";
import TextField from "../ui/TextField";
import RadioInput from "../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../ui/Loading";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../ui/RadioInputGroup";

function CompleteProfileForm() {
  const { register, handleSubmit, errors, watch } = useForm();

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
              validationSchema={{
                required: "نام و نام خانوادگی ضروری است",
              }}
              errors={errors}
            />
            <TextField
              label="ایمیل"
              name="email"
              register={register}
              validationSchema={{
                required: "ایمیل ضروری است",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "ایمیل نامعتبر است",
                },
              }}
              errors={errors}
            />
            <RadioInputGroup
              errors={errors}
              watch={watch}
              register={register}
              configs={{
                name: "role",
                validationSchema: {
                  required: "انتخاب نقش ضروری است",
                },
                options: [
                  {
                    value: "OWNER",
                    label: "کارفرما",
                  },
                  {
                    value: "FREELANCER",
                    label: "فریلنسر",
                  },
                ],
              }}
            />
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
