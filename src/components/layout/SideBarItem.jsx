import { Link } from "react-router-dom";

export const SideBarItem = ({ to, icon, label }) => (
  <Link to={to}>
    <li className="hover:bg-neutral-200 hover:text-neutral-950 p-3 rounded-md cursor-pointer flex flex-col items-center justify-center gap-1 transition-colors duration-150">
      {icon}
      <span className="text-[10px] text-neutral-500">{label}</span>
    </li>
  </Link>
);
