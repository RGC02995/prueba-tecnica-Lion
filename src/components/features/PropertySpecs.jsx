import { SpecCard } from "./SpecCard.jsx";

export const PropertySpecs = ({ specs }) => (
  <div>
    <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
      Características
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {specs.map(({ label, value }) => (
        <SpecCard key={label} label={label} value={value} />
      ))}
    </div>
  </div>
);
