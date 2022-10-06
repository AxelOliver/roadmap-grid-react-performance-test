import React, { memo, useState } from "react";
import styled from "styled-components";
import ActiveCell from "./ActiveCell";
import "../App.css";
import Initiative from "./Initiative";

const DropZone = () => {
  return (
		<>
      <TrackAbove />
      <LineBefore />
      <LineAfter />
      <TrackBelow />
		</>
  );
};


const TrackAbove = memo(styled.div`
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

export default memo(DropZone);
