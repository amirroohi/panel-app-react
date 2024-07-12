import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { completeProfile } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import TextField from "../../ui/TextField";
import RadioInputGroup from "../../ui/RadioInputGroup";
import Loading from "../../ui/Loading";

function CompleteProfileForm() {
  const { register, handleSubmit, errors, watch } = useForm();
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
  );
}
export default CompleteProfileForm;
