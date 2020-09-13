import React from "react";
import Header from "../../components/Header/Header.jsx";
import style from "./InfoPage.module.css";
import getUniver from "../../helpers/getUniver";
import ProfBlock from "../../components/ProfBlock/ProfBlock.jsx";
import StudBlock from "../../components/StudBlock/StudBlock.jsx";

const InfoPage = () => {
  const univer = getUniver();
  const [isOpen, setOpen] = React.useState(1);
  const handleChangeOpen = (value) => {
    setOpen(value);
  };
  return (
    <div className={style.container}>
      <Header
        title={univer?.name}
        handleChangeOpen={handleChangeOpen}
        isOpen={isOpen}
      />
      {isOpen === 1 && (
        <StudBlock univer={univer} handleChangeOpen={handleChangeOpen} />
      )}
      {isOpen === 2 && (
        <ProfBlock univer={univer} handleChangeOpen={handleChangeOpen} />
      )}
    </div>
  );
};

export default InfoPage;
