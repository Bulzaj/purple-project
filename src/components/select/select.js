import React, { useEffect } from "react";

const Select = (props) => {
  useEffect(() => {
    console.log(props);
  });

  if (props.options.length > 0) {
    console.log("options exists!");
  }
  return (
    <div className="select__container">
      <label className="select__label">{props.name}</label>
      <select className="select">
        {props.options.map((opt) => {
          return (
            <option className="select__option" key={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
