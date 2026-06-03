export const handleSubmitForm = (e, addProperty, setErrors) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  const errors = {};
  for (const key in data) {
    if (!data[key] || data[key].toString().trim() === "") {
      errors[key] = "Este campo es obligatorio";
    }
  }

  if (Object.keys(errors).length > 0) {
    setErrors(errors);
    return;
  }

  setErrors({});
  data.id = crypto.randomUUID();
  data.images = [data.images];
  addProperty(data);
  e.currentTarget.reset();
};
