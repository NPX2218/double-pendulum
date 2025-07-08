/////////////////////////////////////
// IMPORTING LIBRARIES
/////////////////////////////////////

import React from "react";
var Latex = require("react-latex");

/////////////////////////////////////
// COMPONENT: EULER LAGRANGE DERIVATION
/////////////////////////////////////

const EulerLagrangeDerivation = (): JSX.Element => {
  return (
    <section id="euler-lagrange-derivation">
      <br />
      <h2 className="text-white text-2xl font-bold pb-2">
        Derivation of Euler-Lagrange Equation
      </h2>

      <p> Step 1: Define the Lagrangian</p>
      <p>
        The Lagrangian <Latex>{"$(L)$"}</Latex> is a function that typically
        depends on the generalized coordinates <Latex>{"$(q)$"}</Latex>, their
        time derivatives <Latex>{"$(q'(t))$"}</Latex>, and possibly time{" "}
        <Latex>{"$(t)$"}</Latex>. For many physical systems, the Lagrangian
        represents the difference between the kinetic energy{" "}
        <Latex>{"$(T)$"}</Latex> and the potential energy{" "}
        <Latex>{"$(U)$"}</Latex>:
      </p>
      <span className="my-10 text-center flex items-center justify-center w-full">
        <Latex>{"$L(q, q', t) = T(q, q') - U(q, t)$"}</Latex>
      </span>

      <p> Step 2: Define the Action Functional</p>
      <p>
        The action functional <Latex>{"$(S)$"}</Latex> is defined as the
        integral of the Lagrangian over a time interval{" "}
        <Latex>{"$[t_0, t_1]$"}</Latex>:
      </p>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>{"$S[q] = \\int_{t_0}^{t_1} L(q(t), q'(t), t) \\, dt$"}</Latex>
      </span>

      <p>
        {" "}
        Step 3: Vary the Action Functional (This step was reccomended by
        ChatGPT, and I have taken a different route through my derivations)
      </p>
      <p>
        Consider a small variation <Latex>{"$(\\delta q(t))$"}</Latex> to the
        path <Latex>{"$(q(t))$"}</Latex>. The varied path is{" "}
        <Latex>{"$(q(t) + \\delta q(t))$"}</Latex>. The variation in the action
        functional <Latex>{"$(\\delta S)$"}</Latex> is then given by:
      </p>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>{"$\\delta S = S[q + \\delta q] - S[q]$"}</Latex>
      </span>
      <p>
        To find this variation, expand the action functional around{" "}
        <Latex>{"$(q(t))$"}</Latex>:
      </p>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>
          {
            "$\\delta S = \\int_{t_0}^{t_1} L(q + \\delta q, q' + \\delta q', t) \\, dt - \\int_{t_0}^{t_1} L(q, q', t) \\, dt$"
          }
        </Latex>
      </span>
      <p>
        Assuming <Latex>{"$(\\delta q)$"}</Latex> is small, we can perform a
        first-order Taylor expansion of the Lagrangian:
      </p>
      <span className="py-10 text-center flex flex-col space-y-10 items-center justify-center w-full">
        <Latex>{"$L(q + \\delta q, q' + \\delta q', t) $"}</Latex>

        <Latex>
          {
            "$ \\approx L(q, q', t) + \\frac{\\partial L}{\\partial q} \\delta q + \\frac{\\partial L}{\\partial q'} \\delta q'$"
          }
        </Latex>
      </span>
      <p>Thus,</p>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>
          {
            "$\\delta S = \\int_{t_0}^{t_1} \\left( \\frac{\\partial L}{\\partial q} \\delta q + \\frac{\\partial L}{\\partial q'} \\delta q' \\right) \\, dt$"
          }
        </Latex>
      </span>

      <p> Step 4: Apply Integration by Parts</p>
      <p>
        Notice that the term involving <Latex>{"$(\\delta q')$"}</Latex> can be
        integrated by parts to make the variation only involve{" "}
        <Latex>{"$(\\delta q)$"}</Latex>. Recall the integration by parts
        formula:
      </p>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>
          {
            "$\\int_{t_0}^{t_1} u \\frac{dv}{dt} dt = \\left. u v \\right|_{t_0}^{t_1} - \\int_{t_0}^{t_1} v \\frac{du}{dt} dt$"
          }
        </Latex>
      </span>
      <p>
        Set <Latex>{"$( u = \\frac{\\partial L}{\\partial q'} )$"}</Latex> and{" "}
        <Latex>{"$( dv = \\delta q' \\ dt )$"}</Latex>. Then{" "}
        <Latex>
          {
            "$( du = \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) dt )$"
          }
        </Latex>{" "}
        and <Latex>{"$( v = \\delta q )$"}</Latex>, so:
      </p>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>
          {
            "$\\int_{t_0}^{t_1} \\frac{\\partial L}{\\partial q'} \\delta q' dt = \\left. \\frac{\\partial L}{\\partial q'} \\delta q \\right|_{t_0}^{t_1} - \\int_{t_0}^{t_1} \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) \\delta q dt$"
          }
        </Latex>
      </span>
      <p>
        Assuming that <Latex>{"$(\\delta q(t_0) = \\delta q(t_1) = 0)$"}</Latex>{" "}
        (the variations at the boundaries are zero), the boundary term vanishes:
      </p>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>
          {
            "$\\left. \\frac{\\partial L}{\\partial q'} \\delta q \\right|_{t_0}^{t_1} = 0$"
          }
        </Latex>
      </span>
      <p>Therefore,</p>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>
          {
            "$\\int_{t_0}^{t_1} \\frac{\\partial L}{\\partial q'} \\delta q' dt = - \\int_{t_0}^{t_1} \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) \\delta q dt$"
          }
        </Latex>
      </span>

      <p> Step 5: Combine Terms and Apply the Fundamental Lemma</p>
      <p>Substituting back into the variation of the action functional:</p>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>
          {
            "$\\delta S = \\int_{t_0}^{t_1} \\left( \\frac{\\partial L}{\\partial q} \\delta q - \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) \\delta q \\right) dt$"
          }
        </Latex>
      </span>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>
          {
            "$\\delta S = \\int_{t_0}^{t_1} \\left( \\frac{\\partial L}{\\partial q} - \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) \\right) \\delta q \\, dt$"
          }
        </Latex>
      </span>
      <p>
        For the action <Latex>{"$(S)$"}</Latex> to be stationary (i.e., for{" "}
        <Latex>{"$(q(t))$"}</Latex> to be an extremum of{" "}
        <Latex>{"$(S)$"}</Latex>), <Latex>{"$(\\delta S)$"}</Latex> must be zero
        for all possible variations <Latex>{"$(\\delta q(t))$"}</Latex>. By the
        fundamental lemma of the calculus of variations, this implies:
      </p>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>
          {
            "$\\frac{\\partial L}{\\partial q} - \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) = 0$"
          }
        </Latex>
      </span>
      <p>
        This is the <strong>Euler-Lagrange equation</strong>:
      </p>
      <span className="py-10 text-center flex items-center justify-center w-full">
        <Latex>
          {
            "$\\frac{\\partial L}{\\partial q} - \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial q'} \\right) = 0$"
          }
        </Latex>
      </span>
      <p>And that completes the derivation!</p>

      <p>
        The complete derivation with a little more steps can be found with the
        PDF linked below
      </p>
    </section>
  );
};

/////////////////////////////////////
// EXPORTING EULER LAGRANGE DERIVATION
/////////////////////////////////////

export default EulerLagrangeDerivation;
