/////////////////////////////////////
// IMPORTING LIBRARIES
/////////////////////////////////////

import React from "react";
var Latex = require("react-latex");

/////////////////////////////////////
// COMPONENT: DOUBLE PENDULUM DERIVATION
/////////////////////////////////////

const DoublePendulumDerivation = (): JSX.Element => {
  return (
    <section id="double-pendulum-derivation">
      <h2 className="text-white text-2xl font-bold pb-2">
        Derivation of Double Pendulum
      </h2>
      <div className="w-full flex-col min-[1200px]:flex-row flex gap-10">
        <div className="min-[1200px]:w-1/2 w-full flex flex-col items-center ">
          <span className="my-10 text-center flex items-center justify-center w-full">
            <Latex>
              {
                "$\\frac{\\partial L}{\\partial q} - \\frac{d}{dt} \\left( \\frac{\\partial L}{\\partial \\dot{q}} \\right) = 0, \\space \\\\L = T - V$"
              }
            </Latex>
          </span>
          <p>
            The derivation for the formulas that are used in its visualization
            are shown, but can also be found here for a clearer version:{" "}
            <a className="font-bold" href="">
              LINK
            </a>
            <br />
            <br />
            The final equations are as follows:
          </p>
          <div className="flex flex-col gap-10 pt-10">
            <div className="flex flex-row gap-9">
              <Latex>
                {
                  " $\\dot{\\theta}=\\left(\\frac{a-c\\ddot{\\theta}}{b}\\right)$"
                }
              </Latex>
              <Latex>
                {" $\\ddot{\\theta}=\\left(\\frac{fb-wa}{kb-wc}\\right)$"}
              </Latex>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <ul>
                  <li>
                    <Latex>{" $a=-(m_1+m_2)gR_1sin(\\theta_1)$"}</Latex>
                  </li>
                  <li>
                    <Latex>{" $b=(m_1+m_2)R_1^2$"}</Latex>
                  </li>
                  <li>
                    <Latex>{" $c=m_2R_1R_2cos(\\theta_1-\\theta_2)$"}</Latex>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <Latex>
                      {
                        " $f=-m_2gR_2sin(\\theta_2) + m_2R_1R_2\\ddot{\\theta_1}^2sin(\\theta_1-\\theta_2)$"
                      }
                    </Latex>
                  </li>
                  <li>
                    <Latex>{"$k=m_2R_2^2$"}</Latex>
                  </li>
                  <li>
                    <Latex>{" $w=m_2R_1R_2cos(\\theta_1-\\theta_2)$"}</Latex>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="min-[1200px]:w-1/2 w-full flex items-center justify-center">
          <iframe
            src="https://drive.google.com/file/d/1OTLheqAu_0YbTy7cu28S7PH0r4RXVWXN/preview"
            width="640"
            height="480"
            className="rounded-3xl"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

/////////////////////////////////////
// EXPORTING DOUBLE PENDULUM DERIVATION
/////////////////////////////////////

export default DoublePendulumDerivation;
