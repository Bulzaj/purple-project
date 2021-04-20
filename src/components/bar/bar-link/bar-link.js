import React from "react";
import { Link } from "react-router-dom";

const BarLink = (props) => {
  return (
    <Link className="bar__link" to={props.path}>
      {props.children}
    </Link>
  );
};
export default BarLink;
