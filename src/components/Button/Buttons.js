import React, { useState } from "react";
import Button from "./Button";

const Buttons = () => {
  const handleClick = () => alert(`Bạn đã click`); // không có tham số
  // let content = "Nội dung được hiển thị";
  const [content, setContent] = useState("Vui lòng click vào nút được chọn");
  const [count, setCount] = useState(0);
  const onClickUp = () => {
    setCount(count + 1);
  };
  const onClickDown = () => {
    setCount(count - 1);
  };
  // console.log(content);
  const handleClick2 = (x) => {
    alert(`Bạn đã chọn nút ${x}`);
    setContent(`Bạn đã chọn nút ${x}`);
    // console.log(content);
  };
  return (
    <div>
      <hr />
      <p>Count: {count}</p>
      <ul style={{ listStyleType: "none", display: "flex" }}>
        {/* Không có tham số */}
        <Button handleClick={handleClick}>HTML</Button>
        <Button handleClick={handleClick}>CSS</Button>
        <Button handleClick={handleClick}>ReactJS</Button>
        <Button handleClick={handleClick}>NodeJS</Button>
        <Button handleClick={onClickUp}>++</Button>
        <Button handleClick={onClickDown}>--</Button>
        {/* Có tham số */}
        <Button handleClick={() => handleClick2("HTML")}>HTML</Button>
        <Button handleClick={() => handleClick2("CSS")}>CSS</Button>
        <Button handleClick={() => handleClick2("ReactJS")}>ReactJS</Button>
        <Button handleClick={() => handleClick2("NodeJS")}>NodeJS</Button>
      </ul>
      <h6>{content}</h6>
      <hr />
    </div>
  );
};

export default Buttons;
