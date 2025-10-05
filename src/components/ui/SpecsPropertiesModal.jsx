export const SpecsPropertiesModal = ({ selectedPropertie }) => {
  console.log(selectedPropertie);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-30 "
      onClick={() => console.log(selectedPropertie)}
    >
      <div className="w-[80vw] h-auto] bg-neutral-200 rounded-sm p-[32px]">
        {/*Header */}
        <header className="flex flex-row flex-wrap justify-between p-0">
          <div>REF</div>
          <div>X</div>
        </header>
        {/*Información básica */}
        <div className=" ">Precio</div>
        <div className=" ">Direccion</div>
        {/*Características */}
        <div className=" ">
          Caracteristicas
          <div>
            <div>Superficie</div>
            <div>Habitaciones</div>
            <div>Baños</div>
            <div>Clase</div>
            <div>Emisiones</div>
            Clase
            <div>Construccion</div>
            <div>Conservacion</div>
          </div>
          <div>Detalles map</div>
        </div>
        {/*Imágenes */}
        <div>imagenes</div>
        {/*Descripción */}
        <div>Descripcion</div>
      </div>
    </div>
  );
};
