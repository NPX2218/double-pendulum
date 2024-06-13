/////////////////////////////////////
// IMPORTING MODULES
/////////////////////////////////////

import React from "react";

/////////////////////////////////////
// INTERFACE: PROPS
/////////////////////////////////////

interface Props {
  link?: string;
}
/////////////////////////////////////
// COMPONENT: BUTTON
/////////////////////////////////////

const Button = ({ link }: Props): JSX.Element => {
  return (
    <div>
      <a href={link}>
        <button className="justify-center px-12 py-5 text-black bg-green-500 rounded max-md:px-5">
          Sign Up
        </button>
      </a>
    </div>
  );
};

/////////////////////////////////////
// EXPORTING BUTTON
/////////////////////////////////////

export default Button;
