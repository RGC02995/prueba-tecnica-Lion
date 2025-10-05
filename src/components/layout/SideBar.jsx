import { Link } from "react-router-dom";

import { HomeIcon } from "../icons/HomeIcon";
export const SideBar = () => {
  return (
    <div className="w-10 h-[100vh]  border-indigo-200  max-w-[75px] bg-neutral-100 ]">
      <ul className="p-2  style-none text-neutral-400 flex flex-col gap-10 items-center">
        <Link to="/">
          <li className="hover:bg-neutral-200 hover:text-neutral-950 p-2 mt-10  rounded-md cursor-pointer max-h-[45px] flex items-center justify-center">
            <HomeIcon />
          </li>
        </Link>
      </ul>
    </div>
  );
};
