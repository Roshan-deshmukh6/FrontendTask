import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Pentakuhl from "./pages/Pentakuhl";
import "./styles/global.css";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pentakuhl" element={<Pentakuhl />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
