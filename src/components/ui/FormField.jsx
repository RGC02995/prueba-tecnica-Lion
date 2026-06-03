export const FormField = ({ name, label, placeholder, type = "text", errors }) => (
  <div>
    <label className="block text-xs font-medium text-neutral-600 mb-0.5">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-full p-1.5 rounded-md border text-sm text-neutral-800 bg-white focus:outline-none focus:ring-2 transition-colors duration-150 ${
        errors?.[name]
          ? "border-red-400 focus:ring-red-300"
          : "border-neutral-300 focus:ring-neutral-400"
      }`}
    />
    {errors?.[name] && (
      <p className="text-xs text-red-500 mt-0.5">{errors[name]}</p>
    )}
  </div>
);
