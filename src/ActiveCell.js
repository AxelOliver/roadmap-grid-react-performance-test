import React, { memo, useState } from "react";
import styled from "styled-components";
import Initiative from "./Initiative";

const ActiveCell = ({ cell }) => {
  const [hasInitiative, setHasInitiative] = useState(false);

	const addOrRemoveInitiative = (hasInitiative, setHasInitiative) => {
    hasInitiative ? setHasInitiative(false) : setHasInitiative(true);
  };
  return (
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
  );
};

const Cell = styled.div`
  grid-area: active-cell;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default memo(ActiveCell);
