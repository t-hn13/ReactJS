import React from "react";
import Card from "./Card";

const Cards = () => {
  const img = [
    "https://drile-be87.kxcdn.com/drile/wp-content/uploads/2019/04/05_1-410x492.jpg",
    "https://drile-be87.kxcdn.com/drile/wp-content/uploads/2019/05/07_2-410x492.jpg",
    "https://drile-be87.kxcdn.com/drile/wp-content/uploads/2019/04/10_3-410x492.jpg",
    "https://drile-be87.kxcdn.com/drile/wp-content/uploads/2019/04/12_2-410x492.jpg",
  ];
  const info = [
    {
      img: img[0],
      title: "Components",
      desc: "Lập trình React giúp tách nhỏ giao diện thành nhiều component để dễ quản lý và tái sử dụng",
    },
    {
      img: img[1],
      title: "JSX",
      desc: "Lập trình React giúp tách nhỏ giao diện thành nhiều component để dễ quản lý và tái sử dụng",
    },
    {
      img: img[2],
      title: "React",
      desc: "Lập trình React giúp tách nhỏ giao diện thành nhiều component để dễ quản lý và tái sử dụng",
    },
    {
      img: img[3],
      title: "JS",
      desc: "Lập trình React giúp tách nhỏ giao diện thành nhiều component để dễ quản lý và tái sử dụng",
    },
  ];
  return (
    <div>
      <hr />
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <Card img={info[0].img} title={info[0].title} desc={info[0].desc} />
        <Card img={info[1].img} title={info[1].title} desc={info[1].desc} />
        <Card img={info[2].img} title={info[2].title} desc={info[2].desc} />
        <Card img={info[3].img} title={info[3].title} desc={info[3].desc} />
      </ul>
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <Card {...info[0]} />
        <Card {...info[1]} />
        <Card {...info[2]} />
        <Card {...info[3]} />
      </ul>
      <hr />
    </div>
  );
};

export default Cards;
