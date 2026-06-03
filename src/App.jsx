import { Home } from "./pages/Home/Home";
import { Layout } from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { DefaultError } from "./pages/Error/DefaultError";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<DefaultError />} />
      </Route>
    </Routes>
  );
}

export default App;
