import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AjrakhStory from "./pages/AjrakhStory";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Sustainability from "./pages/Sustainability";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Customisation from "./pages/Customisation";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<AjrakhStory />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customisation" element={<Customisation />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
