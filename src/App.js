import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import LayoutApp from "./Components/Layout/Layout";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutApp />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
