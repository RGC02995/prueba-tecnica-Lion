import { BtnAddProperty } from "../ui/BtnAddProperty.jsx";

export const HomeHeader = ({ addModal, setAddModal }) => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
    <h1 className="text-neutral-800 text-lg sm:text-2xl font-semibold mb-2 sm:mb-0">
      Propiedades
    </h1>
    <BtnAddProperty addProperty={addModal} setAddProperty={setAddModal} />
  </div>
);
