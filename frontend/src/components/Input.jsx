const Input = ({ placeholder, type = "text", onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
};

export default Input;