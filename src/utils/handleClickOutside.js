export const handleClickOutside = (e, { setAddModal, addModal }) => {
  if (e.target.id === "divForm") {
    setAddModal(!addModal);
  }
};
