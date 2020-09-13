import React from "react";
import style from "./Rate.module.css";
// import like from "../../images/like.png";
// import dislike from "../../images/dislike.png";
import info from "../../images/info.svg";
import arrow from "../../images/arrow.svg";

const Rate = ({ univer, handleChangeOpen, isStud }) => {
  console.warn(isStud);
  return (
    <div className={style.container}>
      {/* <h1 className={style.title}>ОЦЕНИ РАБОТУ ПРОФКОМА</h1> */}
      {/* <div className={style.rate}>
        <button className={style.item} onClick={() => addLike(likes)}>
          <img src={like} alt="like" className={style.like} />
          <div className={style.number}>{likes}</div>
        </button>
        <button className={style.item} onClick={() => addDislike(dislikes)}>
          <img src={dislike} alt="dislike" className={style.like} />
          <div className={style.number}>{dislikes}</div>
        </button>
      </div> */}
      <h2 className={style.work}>А КТО В {isStud ? "СТУДСОВЕТЕ" : "ПРОФКОМЕ"}?</h2>
      <div className={style.people}>
        <div className={style.person}>
          <div className={style.left}>
            <div className={style.circle}>
              <img
                src={isStud ? univer?.img1Stud : univer?.img1}
                alt="baba"
                className={style.baba}
              />
            </div>
            <a href={isStud ? univer?.source1Stud : univer?.source1 } className={style.source}>
              источник фото
            </a>
          </div>
          <div className={style.right}>
            <p className={style.surname}>{isStud ? univer?.surname1Stud : univer?.surname1}</p>
            <p className={style.name}>{isStud ? univer?.name1Stud : univer?.name1}</p>
            <p className={style.job}>{isStud ? univer?.job1Stud : univer?.job1}</p>
            <div className={style.placeInfo}>
              <img src={info} alt="info" className={style.info} />
              <p className={style.place}>{univer?.address1}</p>
            </div>
          </div>
        </div>
        <div className={style.person}>
          <div className={style.left}>
            <div className={style.circle}>
              <img
                src={isStud ? univer?.img2Stud : univer?.img2}
                alt="baba"
                className={style.baba}
              />
            </div>
            <p className={style.source}>источник фото</p>
          </div>
          <div className={style.right}>
            <p className={style.surname}>{isStud ? univer?.surname2Stud : univer?.surname2}</p>
            <p className={style.name}>{isStud ? univer?.name2Stud : univer?.name2}</p>
            <p className={style.job}>{isStud ? univer?.job2Stud : univer?.job2}</p>
            <div className={style.placeInfo}>
              <img src={info} alt="info" className={style.info} />
              <p className={style.place}>{isStud ? univer?.address2Stud : univer?.address2}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.rights}>
        <p className={style.photo}>Почему здесь мое фото?</p>
        <p className={style.explanation}>
          Мы использовали сведения о вас и ваше фото, т.к. вы представляете
          студентов и осуществляете публичную деятельность, представляющую
          общественный интерес. Сведения взяты из публичных источников -
          страницах студенческой организации на сайте университета и в соцсетях.
          Если вы не являетесь представителем студенческой организации или
          сведения на этой странице предоставлены с ошибкой, просим немедленно
          связаться с нами:{" "}
          <span className={style.mail}> studorgby@gmail.com </span>
        </p>
      </div>
      <button className={style.hide} onClick={() => handleChangeOpen(0)}>
        <p className={style.collapse}>свернуть</p>
        <img src={arrow} alt="arrow" className={style.arrowUp} />
      </button>
    </div>
  );
};

export default Rate;
