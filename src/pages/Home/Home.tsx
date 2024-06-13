/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";
var Latex = require("react-latex");

/////////////////////////////////////
// INTERFACE: PROPS
/////////////////////////////////////

interface Props {
  scroll?: LocomotiveScroll | null;
}

/////////////////////////////////////
// COMPONENT: HOME
/////////////////////////////////////

const Home = ({ scroll }: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center py-12 bg-black">
        <div className="flex flex-col items-center self-stretch px-20 mt-1.5 w-full max-md:px-5 max-md:max-w-full">
          <Navbar />
        </div>
        <br />
        <br />
        <div className="text-white text-md px-auto min-[1300px]:max-w-6xl max-w-xs sm:max-w-xl min-[600px]:max-w-sm min-[1043px]:max-w-4xl min-[800px]:max-w-2xl">
          <section id="introduction">
            <h2 className="text-white text-2xl font-bold pb-2">Introduction</h2>
            <p>
              The Double pendulum / chatoic pendulum is a scenario where a
              pendulum is connected to a masless string to a second one, which
              ultimately creates chaotic behaviour. In order to achieve this,
              the pendulum's equations were derived using lagrangian mechanics,
              which is different to that of Newtonian mechanics. Through these
              equations, L is the difference between kinetic and potential
              energy within a system, where T is the kinetic energy and V is the
              potential energy. The lagrange equation assums the path of least
              action, wherein the path taken by two systems is one that
              minimizes the action. Inorder to understand the euler lagrange
              formula, it is necessary to derive it: <br />
            </p>
          </section>
          <br />

          <section id="euler-lagrange-derivation">
            <br />
            <h2 className="text-white text-2xl font-bold pb-2">
              Derivation of Euler-Lagrange Equation
            </h2>

            <p> Step 1: Define the Lagrangian</p>
            <p>
              The Lagrangian <Latex>{"$(L)$"}</Latex> is a function that
              typically depends on the generalized coordinates{" "}
              <Latex>{"$(q)$"}</Latex>, their time derivatives{" "}
              <Latex>{"$(q'(t))$"}</Latex>, and possibly time{" "}
              <Latex>{"$(t)$"}</Latex>. For many physical systems, the
              Lagrangian represents the difference between the kinetic energy{" "}
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
              <Latex>
                {"$S[q] = \\int_{t_0}^{t_1} L(q(t), q'(t), t) \\, dt$"}
              </Latex>
            </span>

            <p>
              {" "}
              Step 3: Vary the Action Functional (This step was reccomended by
              ChatGPT, and I have taken a different route through my
              derivations)
            </p>
            <p>
              Consider a small variation <Latex>{"$(\\delta q(t))$"}</Latex> to
              the path <Latex>{"$(q(t))$"}</Latex>. The varied path is{" "}
              <Latex>{"$(q(t) + \\delta q(t))$"}</Latex>. The variation in the
              action functional <Latex>{"$(\\delta S)$"}</Latex> is then given
              by:
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
              Assuming <Latex>{"$(\\delta q)$"}</Latex> is small, we can perform
              a first-order Taylor expansion of the Lagrangian:
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
              Notice that the term involving <Latex>{"$(\\delta q')$"}</Latex>{" "}
              can be integrated by parts to make the variation only involve{" "}
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
              Set <Latex>{"$( u = \\frac{\\partial L}{\\partial q'} )$"}</Latex>{" "}
              and <Latex>{"$( dv = \\delta q' \\ dt )$"}</Latex>. Then{" "}
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
              Assuming that{" "}
              <Latex>{"$(\\delta q(t_0) = \\delta q(t_1) = 0)$"}</Latex> (the
              variations at the boundaries are zero), the boundary term
              vanishes:
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
            <p>
              Substituting back into the variation of the action functional:
            </p>
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
              For the action <Latex>{"$(S)$"}</Latex> to be stationary (i.e.,
              for <Latex>{"$(q(t))$"}</Latex> to be an extremum of{" "}
              <Latex>{"$(S)$"}</Latex>), <Latex>{"$(\\delta S)$"}</Latex> must
              be zero for all possible variations{" "}
              <Latex>{"$(\\delta q(t))$"}</Latex>. By the fundamental lemma of
              the calculus of variations, this implies:
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
              The complete derivation with a little more steps can be found with
              the PDF linked below
            </p>
          </section>
          <br />
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
                  The derivation for the formulas that are used in its
                  visualization are shown, but can also be found here for a
                  clearer version:{" "}
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
                          <Latex>
                            {" $c=m_2R_1R_2cos(\\theta_1-\\theta_2)$"}
                          </Latex>
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
                          <Latex>
                            {" $w=m_2R_1R_2cos(\\theta_1-\\theta_2)$"}
                          </Latex>
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
          <br />
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

/////////////////////////////////////
// EXPORTING HOME
/////////////////////////////////////

export default Home;
