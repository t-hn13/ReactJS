import React from "react";

const Button = (props) => {
  const { children, handleClick } = props;

  return (
    <li style={{ marginRight: "10px" }}>
      <button onClick={handleClick} style={{ cursor: "pointer" }}>
        {children}
      </button>
    </li>
  );
};

export default Button;
