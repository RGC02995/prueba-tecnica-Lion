import { PropertyList } from "./components/features/PropertyList.jsx";
import { Home } from "./pages/Home/Home";
import { SideBar } from "./components/layout/SideBar";
import { Routes, Route } from "react-router-dom";
import { DefaultError } from "./pages/Error/DefaultError";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex bg-neutral-200 min-h-screen">
              <SideBar />
              <Home />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="flex bg-neutral-200 min-h-screen">
              <SideBar />
              <DefaultError />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
