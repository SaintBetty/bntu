import React from "react";
import style from "./Header.module.css";
import cop from '../../images/lilCop.png'
import arrow from '../../images/arrow.svg'
import cn from 'classnames'

const Header = ({ title, handleChangeOpen, isOpen }) => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <img src={cop} alt="copustochka" className={style.cop} />
        <div className={style.info}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.who}>КТО ВАС ПРЕДСТАВЛЯЕТ:</p>
        </div>
      </div>
      <div className={style.buttons}>
        <button className={style.button} onClick={() => handleChangeOpen(isOpen === 1 ? 0 : 1)}>СТУДСОВЕТ<img src={arrow} alt="arrow" className={cn(style.arrow, isOpen === 1 && style.arrowOpen)} /></button>
        <button className={style.button} onClick={() => handleChangeOpen(isOpen === 2 ? 0 : 2)}>ПРОФКОМ<img src={arrow} alt="arrow" className={cn(style.arrow, isOpen === 2 && style.arrowOpen)} /></button>
      </div>
    </div>
  )
};

export default Header;
