import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import SelfDev from "./pages/SelfDev";
import PlayGround from "./pages/PlayGround";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="academics" element={<Academics />} />
          <Route path="selfdev" element={<SelfDev />} />
          <Route path="playground" element={<PlayGround />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
