import React from "react";
import cx from "classnames";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const Select = ({ label, classes, error, allowDisabledState, years }) => {
  const { setFilter, filter } = useLaunchContext();
  const selectClasses = cx(classes, {
    disabled: allowDisabledState ? error : "",
  });
  return (
    <select
      name={label}
      className={selectClasses}
      onChange={(event) => {
        setFilter(event.target.value);
      }}
      value={filter}
    >
      <option value="">{label}</option>
      {years.map((year, index) => {
        return <option value={year} key={index} >{year}</option>
      })}
    </select>
  );
};
