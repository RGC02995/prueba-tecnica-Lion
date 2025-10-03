import { PropertyList } from "./components/features/PropertyList.jsx";
import { Home } from "./pages/Home";
import { SideBar } from "./components/layout/SideBar";
function App() {
  return (
    <div className="flex bg-neutral-200">
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
