import React, { useState } from "react";
import ButtonSelect from "./ButtonSelect";

const Select = () => {
  const img = [
    "https://drile-be87.kxcdn.com/drile/wp-content/uploads/2019/04/05_1-410x492.jpg",
    "https://drile-be87.kxcdn.com/drile/wp-content/uploads/2019/05/07_2-410x492.jpg",
    "https://drile-be87.kxcdn.com/drile/wp-content/uploads/2019/04/10_3-410x492.jpg",
    "https://drile-be87.kxcdn.com/drile/wp-content/uploads/2019/04/12_2-410x492.jpg",
  ];
  const [index, setindex] = useState(0);

  const btnChange = (indexX) => {
    setindex(indexX);
  };
  return (
    <div>
      <hr />
      <img src={img[index]} alt="Ghế" />
      <ButtonSelect btnChange={() => btnChange(0)}>Ghế 1</ButtonSelect>
      <ButtonSelect btnChange={() => btnChange(1)}>Ghế 2</ButtonSelect>
      <ButtonSelect btnChange={() => btnChange(2)}>Ghế 3</ButtonSelect>
      <ButtonSelect btnChange={() => btnChange(3)}>Ghế 4</ButtonSelect>
      <hr />
    </div>
  );
};

export default Select;
