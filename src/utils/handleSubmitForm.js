export const handleSubmitForm = (e, addProperty) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  //Comprobamos que la información de los inputs no esté vacia
  for (const key in data) {
    if (!data[key] || data[key].toString().trim() === "") {
      return console.log(`El campo "${key}" es obligatorio`);
    }
  }
  addProperty(data); // Añade al array directamente

  e.currentTarget.reset();
};
