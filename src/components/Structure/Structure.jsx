import React from "react";
import "./Structure.css";

function Structure() {
  return (
    <div className="structure">
      <div className="structure__container">
        <h1>Efficient Structure</h1>
        <div className="structure__container--item">
          <h2>Sales & Marketing</h2>
          <p>
            Lead by a highly qualified Sales and Marketing Manager, our
            well-trained sales team sell directly in private and public
            hospitals, laboratories, Clinics, and other customers. Strategic
            Marketing responsible for the planning of actions in congresses,
            organization of events, and symposiums.
          </p>
          <h2>Project Coordinator</h2>
          <p>
            Our dedicated project manager performs a day to day communication
            exercise between the client, the supplier, and our management.
          </p>
          <h2>Regulatory Team</h2>
          <p>
            A dedicated regulatory team follows after all regulatory activities
            including registration, post-market product safety, and
            pharmacovigilance activities
          </p>
          <h2>Technical Services</h2>
          <p>
            With the objective of attaining excellence and maintaining our
            competitive position and market leadership, at Retina we maintain
            efficiency in customer support processes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Structure;
