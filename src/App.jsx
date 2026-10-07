import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      
      {/* Navbar ثابت في كل الصفحات */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer ثابت في كل الصفحات */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;