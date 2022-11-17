import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Cursos from "./pages/Cursos";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="cursos" element={<Cursos />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
