import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";

const Initiative = ({ uuid, cellUuid }) => {
  const [backgroundColor, setBackgroundColor] = useState("green");
	const test = useCallback(
		(color) => {
			setBackgroundColor(color)
		},
		[],
	)
	console.log({uuid, cellUuid})
  return (
    <StyledDiv
      onFocus={() => test("red")}
      onBlur={() => test("green")}
      tabIndex={-1}
      backgroundColor={backgroundColor}
    ></StyledDiv>
  );
};
const StyledDiv = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  :hover {
    border: 2px solid blue;
  }
`;

export default Initiative;
