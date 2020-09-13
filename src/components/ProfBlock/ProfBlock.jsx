import React from "react";
import PromiseBlock from "../PromiseBlock/PromiseBlock";
import WhatElse from "../WhatElse/WhatElse";
import Rate from "../Rate/Rate";

const ProfBlock = ({ univer, handleChangeOpen }) => {
  return (
    <>
      <PromiseBlock univer={univer} />
      <WhatElse />
      <Rate univer={univer} handleChangeOpen={handleChangeOpen} />
    </>
  );
};

export default ProfBlock;
