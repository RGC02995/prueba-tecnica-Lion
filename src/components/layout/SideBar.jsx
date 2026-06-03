import { SideBarItem } from "./SideBarItem.jsx";
import { HomeIcon } from "../icons/HomeIcon";

export const SideBar = () => (
  <div className="w-16 sm:w-20 min-h-screen bg-neutral-100 shadow-sm">
    <ul className="p-2 list-none text-neutral-400 flex flex-col gap-6 items-center pt-6">
      <SideBarItem
        to="/"
        icon={<HomeIcon width="22" height="22" />}
        label="Inicio"
      />
    </ul>
  </div>
);
