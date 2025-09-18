import React from "react";

const Header = () => {
  const arr = [
    "Xin chào bạn, chúc bạn một ngày mới thật vui vẻ nhé!",
    "Chào mừng bạn đến với khóa học React JS tại TUHOC.cc.",
    "Xin chào, chúc bạn luôn học tập hiệu quả và thành công.",
  ];
  const arrRandom = Math.floor(Math.random() * arr.length);
  // Để xem kết quả trong bảng console
  // console.log(arr);
  // console.log(arrRandom);
  // console.log(arr[arrRandom]);

  const toDay = new Date().toLocaleDateString();
  // console.log(toDay);
  const time = new Date().toLocaleTimeString();
  // console.log(time);

  const name = "Hoàng";
  // console.log(name);

  const isLogin = [true, false];
  // console.log(isLogin);
  const random = Math.floor(Math.random() * isLogin.length);
  // console.log(random);
  const login = isLogin[random];
  // console.log(login);
  return (
    <div>
      <hr />
      <h1>{arr[arrRandom]}</h1>
      <p>
        Hôm nay là: <strong>{toDay}</strong>
      </p>
      <p>
        Thời gian hiện tại: <strong>{time}</strong>
      </p>
      <h4>Xin chào {name}</h4>
      <p>{login === true ? "Bạn đã đăng nhập" : "Bạn chưa đăng nhập"}</p>
      <hr />
    </div>
  );
};

export default Header;
