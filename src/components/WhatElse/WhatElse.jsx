import React from "react";
import style from "./WhatElse.module.css";
import scream from "../../images/scream.svg";

const WhatElse = ({ isStud }) => {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <img src={scream} alt="scream" className={style.scream} />
        <div className={style.info}>
          <h1 className={style.else}>ЧТО ЕЩЕ МОГУТ</h1>
          <p className={style.text}>публично осудить насилие над студентами</p>
          <p className={style.text}>
            организовать встречу студентов БГУИР с ректором
          </p>
        </div>
      </div>
      <div className={style.buttons}>
        <button className={style.prof}>
          <div className={style.top}>{isStud ? "студсовету" : "профкому"}</div>
          <div className={style.bottom}>памятка </div>
        </button>
        <button className={style.stud}>
          <div className={style.topSec}>студенту</div>
          <div className={style.bottomSec}>памятка </div>
        </button>
      </div>
    </div>
  );
};

export default WhatElse;
