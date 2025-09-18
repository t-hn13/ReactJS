import React, { useState } from "react";
import Button from "./Button";
import { reactInfo } from "./Data";

const Buttons = () => {
  const [info, setInfo] = useState("");
  // Nếu chuỗi rỗng sẽ có giá trị là false
  const data = reactInfo;
  const handle_Click = (x) => {
    setInfo(x);
  };
  return (
    <div>
      <Button handle_Click={() => handle_Click("jsx")}>JSX</Button>
      <Button handle_Click={() => handle_Click("react")}>React</Button>
      <Button handle_Click={() => handle_Click("component")}>Components</Button>
      <Button handle_Click={() => handle_Click("state")}>State</Button>
      <hr />
      {/* sử dụng toán tử 3 ngôi khi info ban đầu rỗng */}
      {info === "" ? (
        <p>Bạn cần chọn 1 chủ đề:</p>
      ) : (
        <div>
          <h3>{data[info].title}</h3>
          <p>{data[info].desc}</p>
          <pre>
            <code>{data[info].code}</code>
          </pre>
        </div>
      )}

      {/* Sử dụng AND && */}
      {info === "" && <p>Bạn cần chọn 1 chủ đề:</p>}
      {info && (
        <div>
          <h3>{data[info].title}</h3>
          <p>{data[info].desc}</p>
          <pre>
            <code>{data[info].code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default Buttons;
