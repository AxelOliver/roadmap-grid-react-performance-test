import React, { memo, useState } from "react";
import "./App.css";
import Initiative from "./Initiative";

const Cell = ({ cellUuid }) => {
  const [hasInitiative, setHasInitiative] = useState(false);
  const addOrRemoveInitiative = (hasInitiative, setHasInitiative) => {
    hasInitiative ? setHasInitiative(false) : setHasInitiative(true);
  };
  return (
    <div
      className="cell"
      style={{
        display: "flex",
				flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => addOrRemoveInitiative(hasInitiative, setHasInitiative)}
      >
        {hasInitiative ? "remove initiative" : "add inititative"}
      </button>
      {hasInitiative ? <Initiative uuid={new Date().getTime()} cellUuid={cellUuid} /> : null}
    </div>
  );
};

export default memo(Cell);
