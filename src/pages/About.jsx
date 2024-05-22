import React from "react";
import AboutBanner from "../components/About/aboutBanner/AboutBanner";
import AboutDetail from "../components/About/AboutDetail/AboutDetail";
import AboutCard from "../components/About/AboutCard/AboutCard";

function About() {
  return (
    <div>
      <AboutBanner />
      <AboutDetail />
      <AboutCard />
    </div>
  );
}

export default About;
