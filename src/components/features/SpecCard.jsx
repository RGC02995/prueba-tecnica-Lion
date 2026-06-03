export const SpecCard = ({ label, value }) => (
  <div className="bg-white rounded-lg p-2 text-center shadow-sm">
    <span className="block text-[9px] text-neutral-400 uppercase tracking-wide">
      {label}
    </span>
    <span className="block text-xs font-semibold text-neutral-800 mt-0.5">
      {value}
    </span>
  </div>
);
