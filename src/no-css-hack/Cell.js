import React, { memo, useState } from "react";
import styled from "styled-components";
import ActiveCell from "./ActiveCell";
import "../App.css";
import Initiative from "./Initiative";
import DropZones from "./DropZones";

const Cell = ({ cell, dragging }) => {
  console.log(cell);
  return (
    <CellContainer>
      {dragging && <DropZones />}
      <ActiveCell cell={cell} dragging={dragging} />
    </CellContainer>
  );
};

const CellContainer = styled.div`
  min-width: 100px;
  min-height: 100px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  grid-template-rows: 1fr 7fr 1fr;
  grid-template-areas:
    ". track-above ."
    "line-before active-cell line-after"
    ". track-below .";
`;
const TrackAbove = memo(styled.div`
  opacity: ${(prop) => (prop.dragging === true ? "100%" : "0%")};
  background-color: lightblue;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  grid-area: track-above;
  :hover {
    background-color: lightcoral;
  }
  transition: all 0.5s ease-out;
`);
const TrackBelow = memo(styled.div`
  opacity: ${(prop) => (prop.dragging === true ? "100%" : "0%")};
  background-color: lightblue;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  grid-area: track-below;
  :hover {
    background-color: lightcoral;
  }
  transition: all 0.5s ease-out;
`);
const LineBefore = memo(styled.div`
  opacity: ${(prop) => (prop.dragging === true ? "100%" : "0%")};
  background-color: lightblue;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  grid-area: line-before;
  :hover {
    background-color: lightcoral;
  }
  transition: all 0.5s ease-out;
`);
const LineAfter = memo(styled.div`
  opacity: ${(prop) => (prop.dragging === true ? "100%" : "0%")};
  background-color: lightblue;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  grid-area: line-after;
  :hover {
    background-color: lightcoral;
  }
  transition: all 0.5s ease-out;
`);

export default memo(Cell);
