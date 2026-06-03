export const PropertyDescription = ({ description }) => (
  <div className="flex-1">
    <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
      Descripción
    </h3>
    <p className="text-sm text-neutral-600 leading-relaxed">
      {description || "No disponible"}
    </p>
  </div>
);
