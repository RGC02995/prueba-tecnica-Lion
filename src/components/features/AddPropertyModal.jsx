import { useState } from "react";
import { handleSubmitForm } from "../../utils/handleSubmitForm.js";
import { handleClickOutside } from "../../utils/handleClickOutside.js";
import { ModalOverlay } from "../ui/ModalOverlay.jsx";
import { FormField } from "../ui/FormField.jsx";
import { FORM_ROWS } from "../../data/formFields.js";

export const AddPropertyModal = ({ setAddModal, addProperty }) => {
  const [errors, setErrors] = useState({});

  return (
    <ModalOverlay id="divForm" onClick={(e) => handleClickOutside(e, { setAddModal })}>
      <div className="w-[90vw] max-w-[420px] bg-neutral-100 rounded-lg shadow-xl overflow-y-auto max-h-[90vh]">
        <div className="bg-neutral-950 text-white px-4 py-3 rounded-t-lg">
          <h2 className="text-sm font-semibold">Añadir propiedad</h2>
        </div>

        <form
          id="addEventForm"
          onSubmit={(e) => handleSubmitForm(e, addProperty, setErrors)}
          className="px-4 py-3 flex flex-col gap-2"
        >
          {FORM_ROWS.map((row, i) => (
            <div key={i} className={row.length > 1 ? "flex gap-2" : ""}>
              {row.map((field) => (
                <FormField key={field.name} {...field} errors={errors} />
              ))}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-neutral-950 text-white py-2 rounded-md text-sm font-medium hover:bg-neutral-700 transition-colors duration-150"
          >
            Guardar propiedad
          </button>
        </form>
      </div>
    </ModalOverlay>
  );
};
