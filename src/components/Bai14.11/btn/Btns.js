import React, { useState } from "react";
import Btn from "./Btn";
import { reactInfo } from "../Data";

const Btns = () => {
  // const handle_Click = (x) => {
  //   alert("Xin chào " + x);
  //   setMess(x);
  // };
  // const [mess, setMess] = useState("Bạn càn chọn nút:");
  const data = reactInfo;
  console.log(data);
  const [info, setInfo] = useState("jsx");
  const handle_Click2 = (x) => {
    setInfo(x);
  };
  return (
    <div>
      <div>
        {/* <Btn handle_Click={() => handle_Click("JSX")}>JSX</Btn>
        <Btn handle_Click={() => handle_Click("State")}>State</Btn>
        <Btn handle_Click={() => handle_Click("Component")}>Component</Btn>
        <Btn handle_Click={() => handle_Click("React")}>React</Btn>
        <p>{mess}</p> */}
        <hr />
        <Btn handle_Click={() => handle_Click2("jsx")}>JSX</Btn>
        <Btn handle_Click={() => handle_Click2("state")}>State</Btn>
        <Btn handle_Click={() => handle_Click2("component")}>Component</Btn>
        <Btn handle_Click={() => handle_Click2("react")}>React</Btn>
      </div>
      {/* Nội dung hiển thị */}
      <p>{data[info].title}</p>
      <p>{data[info].desc}</p>
      <pre>
        <code>{data[info].code}</code>
      </pre>
    </div>
  );
};

export default Btns;
