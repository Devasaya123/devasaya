import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AjrakhStory from "./pages/AjrakhStory";
import Artisans from "./pages/Artisans";
import Process from "./pages/Process";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Lookbook from "./pages/Lookbook";
import Journal from "./pages/Journal";
import JournalPost from "./pages/JournalPost";
import Sustainability from "./pages/Sustainability";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<AjrakhStory />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/process" element={<Process />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:id" element={<JournalPost />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
