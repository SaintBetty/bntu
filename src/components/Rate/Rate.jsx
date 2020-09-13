import React from "react";
import style from "./Rate.module.css";
import like from "../../images/like.png";
import dislike from "../../images/dislike.png";
import baba from "../../images/baba.png";
import info from "../../images/info.svg";
import arrow from "../../images/arrow.svg";
import { addLike, addDislike } from "../../store/redux";
import { connect } from "react-redux";

const Rate = ({ likes, dislikes, addDislike, addLike }) => {
  console.warn(likes)
  console.warn(addDislike);
  return (
    <div className={style.container}>
      <h1 className={style.title}>ОЦЕНИ РАБОТУ ПРОФКОМА</h1>
      <div className={style.rate}>
        <button className={style.item} onClick={() => addLike(likes)}>
          <img src={like} alt="like" className={style.like} />
          <div className={style.number}>{likes}</div>
        </button>
        <button className={style.item} onClick={() => addDislike(dislikes)}>
          <img src={dislike} alt="dislike" className={style.like} />
          <div className={style.number}>{dislikes}</div>
        </button>
      </div>
      <h2 className={style.work}>А КТО В ПРОФКОМЕ?</h2>
      <div className={style.people}>
        <div className={style.person}>
          <div className={style.left}>
            <div className={style.circle}>
              <img src={baba} alt="baba" className={style.baba} />
            </div>
            <p className={style.source}>источник фото</p>
          </div>
          <div className={style.right}>
            <p className={style.surname}>АНДРИАЛОВИЧ</p>
            <p className={style.name}>Инна Владимировна </p>
            <p className={style.job}>председатель</p>
            <div className={style.placeInfo}>
              <img src={info} alt="info" className={style.info} />
              <p className={style.place}>
                каб. 311, уч. корп. 2 profstud@bsuir.by +375 17 293 23 59
              </p>
            </div>
          </div>
        </div>
        <div className={style.person}>
          <div className={style.left}>
            <div className={style.circle}>
              <img src={baba} alt="baba" className={style.baba} />
            </div>
            <p className={style.source}>источник фото</p>
          </div>
          <div className={style.right}>
            <p className={style.surname}>АНДРИАЛОВИЧ</p>
            <p className={style.name}>Инна Владимировна </p>
            <p className={style.job}>председатель</p>
            <div className={style.placeInfo}>
              <img src={info} alt="info" className={style.info} />
              <p className={style.place}>
                каб. 311, уч. корп. 2 profstud@bsuir.by +375 17 293 23 59
              </p>
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
      <button className={style.hide}>
        <p className={style.collapse}>свернуть</p>
        <img src={arrow} alt="arrow" className={style.arrowUp} />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  likes: state.likesReducer.likes,
  dislikes: state.likesReducer.dislikes
});

const mapDispatchToProps = {
  addLike,
  addDislike,
};

const RateContainer = connect(mapStateToProps, mapDispatchToProps)(Rate);


export default RateContainer;
