/////////////////////////////////////
// IMPORTING LIBRARIES
/////////////////////////////////////

import React from "react";

/////////////////////////////////////
// COMPONENT: DOUBLE PENDULUM VISUALIZATION
/////////////////////////////////////

const DoublePendulumVisualization = (): JSX.Element => {
  return (
    <section id="double-pendulum-visualization">
      <h2 className="text-white text-2xl font-bold pb-2">Visualizer</h2>
      <br />
      <iframe
        src="https://trinket.io/embed/glowscript/7dcfe940bb?start=result"
        width="100%"
        height="600"
        allowFullScreen
        className="rounded-3xl"
      ></iframe>
    </section>
  );
};

/////////////////////////////////////
// EXPORTING DOUBLE PENDULUM VISUALIZATION
/////////////////////////////////////

export default DoublePendulumVisualization;
