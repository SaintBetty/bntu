import React from "react";
import style from "./Header.module.css";
import  getUniver  from "../../helpers/getUniver";

const Header = () => {
    getUniver()
  return <div className={style.container}></div>;
};

export default Header;
