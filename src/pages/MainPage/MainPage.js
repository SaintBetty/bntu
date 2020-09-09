import React from "react";
import style from "./MainPage.module.css";
import cop from "../../images/cop.png";
import arrow from "../../images/arrow.svg";
import UniverButton from "../../components/UniverButton/UniverButton";

const MainPage = () => {
  const [searchValue, setValue] = React.useState("");
  const handleChangeSearch = function (e) {
    setValue(e.target.value);
  };

  const universList = [
    { value: "bgu", label: "БГУ" },
    { value: "bntu", label: "БНТУ" },
    { value: "bgeu", label: "БГЭУ" },
    { value: "bguir", label: "БГУИР" },
    { value: "bgtu", label: "БГТУ" },
    { value: "bgmu", label: "БГМУ" },
    { value: "mglu", label: "МГЛУ" },
    { value: "bgufk", label: "БГУФК" },
    { value: "bgpu", label: "БГПУ" },
    { value: "bgatu", label: "БГАТУ" },
    { value: "bguki", label: "БГУКИ" },
    { value: "bgam", label: "БГАМ" },
    { value: "bgai", label: "БГАИ" },
    { value: "mitso", label: "МИТСО" },
    { value: "miu", label: "МИУ" },
    { value: "aupprb", label: "АУпПРБ" },
  ];
  const [univers, setUnivers] = React.useState(universList);

  React.useEffect(() => {
    const newList = universList.filter((item) =>
      item.label.includes(searchValue.toUpperCase())
    );
    setUnivers(newList);
  }, [searchValue, universList]);

  return (
    <div className={style.container}>
      <img src={cop} alt="copustochka" className={style.cop} />
      <div className={style.info}>
        <h1 className={style.title}>СТУДЕНТЫ САМОУПРАВЛЯЕМСЯ!</h1>
        <p className={style.text}>
          Ведь студсовет это не только капустник, а профком — не путевки в
          санаторий
        </p>
      </div>
      <div className={style.choice}>
        <p className={style.choose}>ВЫБЕРИ СВОЙ УНИВЕР</p>
        <img src={arrow} alt="arrow" className={style.arrow} />
      </div>
      <input
        className={style.input}
        value={searchValue}
        onChange={handleChangeSearch}
        placeholder="Начни вводить название университета"
      />
      <div className={style.list}>
        {univers.map((item, index) => (
          <UniverButton title={item.label} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
