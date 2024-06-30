function RHFSelect({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name)}
        id={name}
        className="textField__input gap-y-3"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="font-sans text-secondary-700 text-xs font-normal"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default RHFSelect;
