import React, { useState } from "react";
import "./bai14_13.css";
const Bai14_13 = () => {
  const [hienThi1, setHienThi1] = useState(false);
  const [hienThi2, setHienThi2] = useState(false);
  const changeHienThi = () => {
    setHienThi1(true);
  };
  const btnConfirm = () => {
    setHienThi2(true);
    setHienThi1(false);
  };
  const btnQuayLai = () => {
    setHienThi2(false);
    setHienThi1(false);
  };

  const [select, setSelect] = useState(false);
  const change = () => {
    setSelect(true);
  };
  return (
    <div>
      {/* Nếu hienthi1 và 2 đều  = false thì nút này sẽ hiển thị */}
      {!hienThi1 && !hienThi2 && (
        <button onClick={changeHienThi}>Activate</button>
      )}

      {/* Nếu hienthi = true thì khối này sẽ hiển thị */}
      {hienThi1 && (
        <div>
          <h1>Warning!</h1>
          <p>Are you sure you want to activate this mode ?</p>
          <div>
            <button onClick={btnConfirm}>Confirm</button>
            <button onClick={btnQuayLai}>Cancel</button>
          </div>
        </div>
      )}

      {hienThi2 && <h1>Mode Activated!</h1>}

      <hr />
      <button onClick={change} className={select ? "active" : undefined}>
        123
      </button>
      <button onClick={change} className={select ? "active" : undefined}>
        456
      </button>
      <button onClick={change} className={select ? "active" : undefined}>
        789
      </button>
    </div>
  );
};

export default Bai14_13;
