import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Contact from "./components/Contact/Contact";
import Support from "./pages/Support";
import Customer from "./pages/Customer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="support" element={<Support />} />
        <Route path="customers" element={<Customer />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<div>Page Not Found!</div>} />
    </Routes>
  );
}

export default App;
