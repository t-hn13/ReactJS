import React from "react";

const Btn = (props) => {
  const { children, handle_Click } = props;
  return (
    <div>
      <button onClick={handle_Click}>{children}</button>
    </div>
  );
};

export default Btn;
