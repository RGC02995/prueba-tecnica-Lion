export const handleClickOutside = (e, setAddProperty, addProperty) => {
  if (e.target.id === "divForm") {
    setAddProperty(!addProperty);
  }
};
