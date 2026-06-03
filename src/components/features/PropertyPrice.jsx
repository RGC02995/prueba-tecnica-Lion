export const PropertyPrice = ({ price, location }) => (
  <div className="mb-5">
    <div className="font-bold text-3xl text-neutral-900">
      {Number(price).toLocaleString("es-ES")}€
    </div>
    <div className="text-sm text-neutral-400 mt-1">{location}</div>
  </div>
);
