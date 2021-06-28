import React from "react";

const Button = (props) => {
  return (
    <button>
      {props.children} {props.icon}
    </button>
  );
};

export default Button;
