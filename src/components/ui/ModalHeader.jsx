export const ModalHeader = ({ reference, onClose }) => (
  <header className="flex justify-between items-center mb-4">
    <span className="text-xs font-mono bg-neutral-200 text-neutral-600 px-2 py-1 rounded">
      {reference}
    </span>
    <button
      onClick={onClose}
      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 transition-colors duration-150 font-bold"
    >
      ✕
    </button>
  </header>
);
