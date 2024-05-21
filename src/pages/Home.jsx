import React from "react";
import Hero from "../components/Hero/Hero";
import ISO from "../components/ISO/ISO";
import Suppliers from "../components/Suppliers/Suppliers";
import About from "../components/About/About";
import Product from "../components/Product/Product";

function Home() {
  return (
    <div>
      <Hero />
      <ISO />
      <About />
      <Suppliers />
      <Product />
    </div>
  );
}

export default Home;
