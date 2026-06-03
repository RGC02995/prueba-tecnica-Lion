export const ModalOverlay = ({ onClick, id, children }) => (
  <div
    id={id}
    onClick={onClick}
    className="fixed inset-0 flex items-center justify-center bg-black/50 z-30"
  >
    {children}
  </div>
);
