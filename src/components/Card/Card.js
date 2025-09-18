import React from "react";

const Card = (props) => {
  const { img, title, desc } = props;
  return (
    <li
      style={{
        listStyleType: "none",
        textAlign: "center",
        border: "1px solid black",
      }}
    >
      <img src={img} alt={title} />
      <h5>{title}</h5>
      <p>{desc}</p>
    </li>
  );
};

export default Card;
