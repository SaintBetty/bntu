import React from "react";
import style from "./PromiseBlock.module.css";
import tick from "../../images/tick.svg";
import question from "../../images/question.svg";

const PromiseBlock = ({ univer, isStud }) => {
  console.warn(isStud)
  return (
    <div className={style.container}>
      <div className={style.main}>
        <h1 className={style.title}>что обещали</h1>
        <div className={style.list}>
          <div className={style.line}>
            <div className={style.circle} />
            <p className={style.text}>{isStud ? univer?.firstStudPromise : univer?.firstPromise}</p>
          </div>
          <div className={style.line}>
            <div className={style.circle} />
            <p className={style.text}>
              {isStud ? univer?.secondStudPromise : univer?.secondPromise}
              <span className={style.black}>{isStud ? univer?.secondStudCursive : univer?.secondCursive}</span>
            </p>
          </div>
        </div>
        <h2 className={style.title}>А ЧТО УЖЕ СДЕЛАЛИ</h2>
        <div className={style.list}>
          <div className={style.line}>
            <img src={tick} alt="tick" className={style.tick} />
            <p className={style.text}>
              {isStud ? univer?.firstStudDone : univer?.firstDone}
              <span className={style.black}>{isStud ? univer?.firstStudCursive : univer?.firstCursive}</span>
              {isStud ? univer?.secondStudDone : univer?.secondDone}
            </p>
          </div>
          <div className={style.line}>
            <img src={tick} alt="tick" className={style.tick} />
            <p className={style.text}>{isStud ? univer?.thirdStudDone : univer?.thirdDone}</p>
          </div>
        </div>
      </div>
      <img src={question} alt="question" className={style.question} />
    </div>
  );
};

export default PromiseBlock;
