function TextField({
  label,
  name,
  focus = true,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
}) {
  console.log({ ...register(name) });
  return (
    <div>
      <label className="mb-2 block text-secondary-700 " htmlFor={name}>
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <input
        // value={value}
        // onChange={onChange}
        // name={name}
        {...register(name, validationSchema)}
        className="textField__input"
        type={type}
        id={name}
        autoComplete="off"
        autoFocus={focus}
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default TextField;
