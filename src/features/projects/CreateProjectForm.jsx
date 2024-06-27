import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField.jsx";
import RHFSelect from "../../ui/RHFSelect.jsx";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";

function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [tags, setTags] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 8,
            message: "طول عنوان باید ده کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "طول توضیحات باید پانزده کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        required
        register={register}
        options={[]}
      />
      <TagsInput value={tags} onChange={setTags} name="tags" classNames={{}} />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}
export default CreateProjectForm;
