import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
export const Layout = () => {
  return (
    //TODO: Falta implementar en app.jsx en el router
    <div className="flex bg-neutral-200 min-h-screen">
      <SideBar />
      <main className="flex-1 ">
        <Outlet />
      </main>
    </div>
  );
};
