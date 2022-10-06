import React, { memo, useState } from "react";
import styled from "styled-components";
import Initiative from "./Initiative";

const ActiveCell = ({ cell, dragging }) => {
  const [hasInitiative, setHasInitiative] = useState(false);

  const addOrRemoveInitiative = (hasInitiative, setHasInitiative) => {
    hasInitiative ? setHasInitiative(false) : setHasInitiative(true);
  };
  return (
    <>
      <DropZone dragging={dragging} />
      <Cell>
        <button
          onClick={() => addOrRemoveInitiative(hasInitiative, setHasInitiative)}
        >
          {hasInitiative ? "remove" : "add"}
        </button>
        {hasInitiative ? (
          <Initiative uuid={new Date().getTime()} cellUuid={cell.uuid} />
        ) : null}
      </Cell>
    </>
  );
};

const Cell = styled.div`
  grid-area: active-cell;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DropZone = styled.div`
  opacity: ${(prop) => (prop.dragging === true ? "100%" : "0%")};
  background-color: lightblue;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  grid-area: active-cell;
  :hover {
    background-color: lightcoral;
  }
  transition: all 0.5s ease-out;
`;
export default memo(ActiveCell);
