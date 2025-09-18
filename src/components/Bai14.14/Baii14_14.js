import React, { useState } from "react";
import "./Baii14_14.css";
const Baii14_14 = () => {
  const [toggle, setToggle] = useState(false);
  const btnToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <h1 className={toggle ? "active" : ""}>click vào em!!!</h1>
      <button onClick={btnToggle}>Toggle btn</button>
    </div>
  );
};

export default Baii14_14;
