/////////////////////////////////////
// IMPORTING LIBRARIES
/////////////////////////////////////

import React from "react";

/////////////////////////////////////
// COMPONENT: INTRODUCTION
/////////////////////////////////////

const Introduction = (): JSX.Element => {
  return (
    <section id="introduction">
      <h2 className="text-white text-2xl font-bold pb-2">Introduction</h2>
      <p>
        The Double pendulum / chatoic pendulum is a scenario where a pendulum is
        connected to a masless string to a second one, which ultimately creates
        chaotic behaviour. In order to achieve this, the pendulum's equations
        were derived using lagrangian mechanics, which is different to that of
        Newtonian mechanics. Through these equations, L is the difference
        between kinetic and potential energy within a system, where T is the
        kinetic energy and V is the potential energy. The lagrange equation
        assums the path of least action, wherein the path taken by two systems
        is one that minimizes the action. Inorder to understand the euler
        lagrange formula, it is necessary to derive it: <br />
      </p>
    </section>
  );
};

/////////////////////////////////////
// EXPORTING INTRODUCTION
/////////////////////////////////////

export default Introduction;
