export const reactInfo = {
  jsx: {
    title: "JSX",
    desc: "JSX cho phép viết mã giao diện dễ đọc hơn bằng cú pháp HTML-like. Nó giúp việc xây dựng UI rõ ràng và trực quan.",
    code: `
function GioiThieu() {
  return (
    <div>
      <h2>Giới thiệu về React</h2>
      <p>React giúp tạo giao diện hiện đại và dễ bảo trì.</p>
    </div>
  );
}
    `,
  },

  state: {
    title: "State",
    desc: "State là một đối tượng trong React dùng để lưu trữ dữ liệu thay đổi theo thời gian. Khi state thay đổi, component sẽ render lại.",
    code: `
import { useState } from "react";

function DemSo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Bộ đếm số</h2>
      <p>Giá trị hiện tại: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
    `,
  },

  component: {
    title: "Component",
    desc: "Component là khối xây dựng cơ bản trong React. Mỗi component là một hàm hoặc lớp trả về giao diện UI.",
    code: `
function LoiChao(props) {
  return <h2>Xin chào, {props.ten}!</h2>;
}

// Sử dụng
<LoiChao ten="Tấn" />
    `,
  },

  react: {
    title: "React",
    desc: "React là thư viện JavaScript để xây dựng giao diện người dùng. Nó cho phép phát triển UI dựa trên component, dễ tái sử dụng và bảo trì.",
    code: `
// Cài đặt React
// npm install react react-dom

import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Xin chào React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
    `,
  },
};
