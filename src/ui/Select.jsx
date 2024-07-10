function Select({ value, onChange, options }) {
  return (
    <select
      name=""
      id=""
      value={value}
      onChange={onChange}
      className="textField__input py-2 text-xs font-sans bg-secondary-0"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
export default Select;
