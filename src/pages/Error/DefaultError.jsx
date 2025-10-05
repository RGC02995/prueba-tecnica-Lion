import { Link } from "react-router-dom";
export const DefaultError = () => {
  return (
    <div className="font-extralight w-screen h-screen bg-neutral-300 flex items-center justify-center text-2xl">
      <p className="">
        Esta página no existe, presione{" "}
        <Link to="/">
          <b>aquí </b>
        </Link>
        para volver a inicio o en el icono de inicio de la barra lateral.
      </p>
    </div>
  );
};
