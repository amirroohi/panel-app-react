import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField.jsx";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 11,
            message: "طول عنوان باید ده کاراکتر باشد",
          },
        }}
        errors={errors}
        // value={title}
        // onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}
export default CreateProjectForm;
