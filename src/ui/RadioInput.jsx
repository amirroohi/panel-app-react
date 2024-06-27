function RadioInput({ name, id, value, label, checked, register }) {
  return (
    <div className="flex items-center gap-x-3">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        {...register(name)}
        className=" cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
export default RadioInput;
