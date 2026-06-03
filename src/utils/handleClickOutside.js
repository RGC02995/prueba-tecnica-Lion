export const handleClickOutside = (e, { setAddModal }) => {
  if (e.target.id === "divForm") {
    setAddModal(false);
  }
};
