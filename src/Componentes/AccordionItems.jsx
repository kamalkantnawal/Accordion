import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const AccordionItems = ({ data, show, getSelectedId, mutiselection }) => {
  const [showMulti, setShowMulti] = useState(false);
  const handleMultiClicked = () => {
    setShowMulti(!showMulti);
  };
  const singleSelection = () => {
    getSelectedId(data.id);
  };
  return (
    <div className="accordian-items-child">
      <div
        className="header"
        onClick={mutiselection ? handleMultiClicked : singleSelection}
      >
        {data.question}
        <spna>{<FaPlus />}</spna>
      </div>
      {mutiselection ? (
        <div className="discription">
          {showMulti && <div>{data.answer}</div>}
        </div>
      ) : (
        <div className="discription">{show && <div>{data.answer}</div>}</div>
      )}
    </div>
  );
};

export default AccordionItems;
