import { Link } from "react-router-dom";

export const DefaultError = () => (
  <div className="font-extralight w-full flex-1 min-h-screen bg-neutral-300 flex items-center justify-center text-2xl">
    <p>
      Esta página no existe, presione{" "}
      <Link to="/">
        <b>aquí </b>
      </Link>
      para volver a inicio o en el icono de inicio de la barra lateral.
    </p>
  </div>
);
