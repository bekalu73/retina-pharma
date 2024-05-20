import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="other" element={<div>Hello</div>} />
      </Route>
      <Route path="*" element={<div>Page Not Found!</div>} />
    </Routes>
  );
}

export default App;
