export const SpecsPropertiesModal = ({ selectedPropertie, onClose }) => {
  if (!selectedPropertie) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-30"
      onClick={onClose}
    >
      {/* Container */}
      <div
        className="w-[80vw] h-auto bg-neutral-100 rounded-sm p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="flex justify-between mb-4 text-neutral-500">
          <div>{selectedPropertie.reference}</div>
          <button onClick={onClose}>X</button>
        </header>

        {/* Precio y ubicación */}
        <div className="mb-4">
          <div className="font-bold text-4xl">{selectedPropertie.price}€</div>
          <div className="text-[20px] text-neutral-400">
            {selectedPropertie.location}
          </div>
        </div>

        {/* Contenedor principal con 2 columnas */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Columna izquierda */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Características */}
            <div className="mb-3 text-[12px]">
              Características:
              <div className="mt-2 grid grid-cols-4 gap-2 text-neutral-400 text-[10px]">
                <div className="flex flex-col">
                  Superficie:{" "}
                  <b className="text-black">{selectedPropertie.area} m²</b>
                </div>
                <div className="flex flex-col">
                  Habitaciones:{" "}
                  <b className="text-black">{selectedPropertie.rooms}</b>
                </div>
                <div className="flex flex-col">
                  Baños:{" "}
                  <b className="text-black">
                    {selectedPropertie.bathrooms || "-"}
                  </b>
                </div>
                <div className="flex flex-col">
                  Clase:{" "}
                  <b className="text-black">{selectedPropertie.class || "-"}</b>
                </div>
                <div className="flex flex-col">
                  Emisiones:{" "}
                  <b className="text-black">
                    {selectedPropertie.emissions || "-"}
                  </b>
                </div>
                <div className="flex flex-col">
                  Construcción:{" "}
                  <b className="text-black">
                    {selectedPropertie.construction || "-"}
                  </b>
                </div>
                <div className="flex flex-col">
                  Conservación:{" "}
                  <b className="text-black">
                    {selectedPropertie.conservation || "-"}
                  </b>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div>
              <img
                src={selectedPropertie.images}
                alt="foto"
                className="w-full h-40 object-cover rounded"
              />
            </div>
          </div>

          {/* Columna derecha */}
          <div className="flex-1">
            <div className="text-black text-[14px]">
              <h3 className="font-bold mb-2">Descripción</h3>
              <p>{selectedPropertie.description || "No disponible"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
