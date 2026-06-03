import { ModalOverlay } from "../ui/ModalOverlay.jsx";
import { ModalHeader } from "../ui/ModalHeader.jsx";
import { PropertyPrice } from "./PropertyPrice.jsx";
import { PropertySpecs } from "./PropertySpecs.jsx";
import { PropertyDescription } from "./PropertyDescription.jsx";
import { SPEC_FIELDS } from "../../data/propertyFields.js";

export const SpecsPropertiesModal = ({ selectedProperty, onClose }) => {
  if (!selectedProperty) return null;

  const specs = SPEC_FIELDS.map(({ label, field, format }) => ({
    label,
    value: format ? format(selectedProperty[field]) : (selectedProperty[field] || "-"),
  }));

  return (
    <ModalOverlay onClick={onClose}>
      <div
        className="w-[95vw] md:w-[80vw] bg-neutral-100 rounded-xl shadow-2xl p-4 md:p-8 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader reference={selectedProperty.reference} onClose={onClose} />
        <PropertyPrice price={selectedProperty.price} location={selectedProperty.location} />

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <PropertySpecs specs={specs} />
            <img
              src={selectedProperty.images[0]}
              alt="foto"
              className="w-full h-52 object-cover rounded-lg"
            />
          </div>
          <PropertyDescription description={selectedProperty.description} />
        </div>
      </div>
    </ModalOverlay>
  );
};
