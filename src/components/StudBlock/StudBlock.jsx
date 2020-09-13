import React from "react";
import PromiseBlock from "../PromiseBlock/PromiseBlock";
import WhatElse from "../WhatElse/WhatElse";
import Rate from "../Rate/Rate";

const StudBlock = ({ univer, handleChangeOpen }) => {
  return (
    <>
      <PromiseBlock isStud univer={univer} />
      <WhatElse isStud />
      <Rate isStud univer={univer} handleChangeOpen={handleChangeOpen} />
    </>
  );
};

export default StudBlock;
