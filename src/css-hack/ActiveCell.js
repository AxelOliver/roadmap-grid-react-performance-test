import React, { memo, useState } from "react";
import styled from "styled-components";
import Initiative from "./Initiative";

const ActiveCell = ({ cell }) => {
  const [hasInitiative, setHasInitiative] = useState(false);

  const addOrRemoveInitiative = (hasInitiative, setHasInitiative) => {
    hasInitiative ? setHasInitiative(false) : setHasInitiative(true);
  };
  return (
    <>
      <DragZone />
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
const DragZone = memo(styled.div`
  opacity: var(--DragLayerOpacity);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: grey;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  grid-area: active-cell;
  :hover {
    background-color: blue;
  }
  transition: all 0.5s ease-out;
`);

const Cell = styled.div`
  opacity: 100%;
  grid-area: active-cell;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default memo(ActiveCell);
