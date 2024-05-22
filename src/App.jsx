import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<div>Page Not Found!</div>} />
    </Routes>
  );
}

export default App;
