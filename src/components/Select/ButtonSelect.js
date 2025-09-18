import React from "react";

const ButtonSelect = (props) => {
  const { children, btnChange } = props;
  return (
    <li>
      <button onClick={btnChange}>{children}</button>
    </li>
  );
};

export default ButtonSelect;
