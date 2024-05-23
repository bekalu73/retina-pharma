import React from "react";
import AboutBanner from "../components/About/aboutBanner/AboutBanner";
import AboutDetail from "../components/About/AboutDetail/AboutDetail";
import AboutCard from "../components/About/AboutCard/AboutCard";
import Structure from "../components/Structure/Structure";

function About() {
  return (
    <div>
      <AboutBanner />
      <AboutDetail />
      <AboutCard />
      <Structure />
    </div>
  );
}

export default About;
