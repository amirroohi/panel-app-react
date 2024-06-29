import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField.jsx";
import RHFSelect from "../../ui/RHFSelect.jsx";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField.jsx";
import useCategories from "../../hooks/useCategories.js";
import useCreateProject from "./useCreateProject.js";
import Loading from "../../ui/Loading.jsx";
import useEditProject from "./useEditProject.js";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const {
    _id: editId,
    title,
    category,
    deadline,
    description,
    budget,
    tags: editTags,
    status,
    freelancer,
  } = projectToEdit;

  const isEditSession = Boolean(editId);

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(editTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { iscreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();
  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
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
        focus={true}
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
        options={categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">برچسب ها</label>
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          classNames={{}}
        />
      </div>
      <DatePickerField date={date} setDate={setDate} label="آخرین مهلت" />
      <div className="">
        {iscreating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}
export default CreateProjectForm;
