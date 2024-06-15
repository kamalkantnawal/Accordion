import React, { useState } from "react";
import AccordianItems from "./AccordianItems";
import { data } from "./data";
import { AccordianDiv } from "./Styled";
const Accordian = () => {
  const [mutiselection, setMultiSelection] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const getSelectedId = (id) => {
    if (selectedId === id) {
      setSelectedId(-1);
    } else setSelectedId(id);
  };
  const handleMultiClicked = () => {
    setMultiSelection(!mutiselection);
    if (mutiselection) {
      setSelectedId(-1);
    }
  };
  return (
    <>
      <AccordianDiv>
        <button
          style={{ padding: 8, borderRadius: 4 }}
          onClick={handleMultiClicked}
        >
          {mutiselection ? "Multi Selected" : "Select Multiple"}
        </button>
        <div className="accordian-items">
          {data.map((item) => {
            return (
              <AccordianItems
                getSelectedId={getSelectedId}
                show={selectedId === item?.id ? true : false}
                data={item}
                mutiselection={mutiselection}
              />
            );
          })}
        </div>
      </AccordianDiv>
    </>
  );
};

export default Accordian;
