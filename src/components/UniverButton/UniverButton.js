import React from "react";
import style from "./UniverButton.module.css";

const UniverButton = ({ title }) => {
  return <div className={style.button}>{title}</div>;
};

export default UniverButton;
