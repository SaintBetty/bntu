import React from "react";
import style from "./UniverButton.module.css";
import { useHistory } from "react-router-dom";

const UniverButton = ({ title, url }) => {
  const history = useHistory();
  const handleChangePage = (url) => {
    history.push(`/${url}`);
  };
  return (
    <div className={style.button} onClick={() => handleChangePage(url)}>
      {title}
    </div>
  );
};

export default UniverButton;
