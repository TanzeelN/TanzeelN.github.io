import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import HeaderBar from "./components/HeaderBar";
import PointerBeam from "./components/PointerBeam";
import Projects from "./pages/Projects";
import Journey from "./pages/Journey";
import Contact from "./pages/Contact";

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
            <Route path="/projects" element={<Projects />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
