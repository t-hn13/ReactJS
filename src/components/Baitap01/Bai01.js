import React, { useState } from "react";

const Bai01 = () => {
  const loiChao = [
    "Chào bạn",
    "Chào buổi sáng",
    "Chào buổi chiều",
    "Chào buổi tối",
  ];

  const [mess, setMess] = useState(loiChao[0]);

  const currentHour = new Date().getHours();
  // const currentHour = 13;

  const btnChange = (currentHour) => {
    if (currentHour >= 5 && currentHour <= 12) setMess(loiChao[1]);
    else if (currentHour >= 12 && currentHour <= 18) setMess(loiChao[2]);
    else setMess(loiChao[3]);
  };
  return (
    <div>
      <hr />
      <h5>Bài tập 01</h5>
      <p>{mess}</p>
      <button onClick={() => btnChange(currentHour)}>Cập nhật lời chào</button>
      <hr />
    </div>
  );
};

export default Bai01;
