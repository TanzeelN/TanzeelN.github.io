import { HashRouter, Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import HeaderBar from "./components/HeaderBar";
import PointerBeam from "./components/PointerBeam";

function App() {
  return (
    <>
      <PointerBeam />

      {/* Keep your UI above the canvas */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <HashRouter>
          <HeaderBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
