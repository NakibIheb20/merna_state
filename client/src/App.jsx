// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";
import About from "./pages/About";
import Profil from "./pages/Profil";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signout />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}
