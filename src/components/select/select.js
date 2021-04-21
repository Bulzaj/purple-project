import React from "react";

const Select = (props) => {
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
