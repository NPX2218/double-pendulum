/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Introduction from "./Sections/Introduction";
import EulerLagrangeDerivation from "./Sections/EulerLagrangeDerivation";
import DoublePendulumDerivation from "./Sections/DoublePendulumDerivation";
import DoublePendulumVisualization from "./Sections/DoublePendulumVisualization";

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
          <Navbar scroll={scroll} />
        </div>
        <br />
        <br />
        <div className="text-white text-md px-auto min-[1300px]:max-w-6xl max-w-xs sm:max-w-xl min-[600px]:max-w-sm min-[1043px]:max-w-4xl min-[800px]:max-w-2xl">
          <Introduction />
          <br />

          <EulerLagrangeDerivation />
          <br />
          <DoublePendulumDerivation />
          <br />
          <DoublePendulumVisualization />
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
