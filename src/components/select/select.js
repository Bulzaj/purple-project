import React from "react";

const Select = (props) => {
  let select = null;
  if (props.options) {
    select = (
      <select className="select">
        {props.options.map((opt) => {
          return (
            <option className="select__option" key={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    );
  }
  return (
    <div className="select__container">
      <label className="select__label">{props.name}</label>
      {select}
    </div>
  );
};
export default Select;
