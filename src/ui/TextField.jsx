function TextField({ label, value, name, onChange }) {
  return (
    <div>
      <label className="mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className="textField__input"
        type="text"
        name={name}
        id={name}
        autoComplete="off"
      />
    </div>
  );
}
export default TextField;
