import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Cell from "./Cell";
import { v4 } from "uuid";

const Roadmap = () => {
  const [layout, setLayout] = useState({rows: 1, columns: 1, cells: [{uuid: v4()}]});
  const [dragging, setDragging] = useState({bg: 'white', hover: 'white'})

  const {rows, columns, cells} = layout
  const addRow = () => {
    const newCells = [...cells];
    for (let index = 0; index < columns; index++) {
      newCells.push({uuid: v4()});
    }
    setLayout({...layout, rows: rows + 1, cells: newCells});
  };
  const addColumn = () => {
    const newCells = cells.reduce((acc, current, index) => {
      if ((index + 1) % columns === 0) {
        console.log(index)
        return [...acc, current, {uuid: v4()}];
      } else {
        return [...acc, current];
      }
    }, []);
    setLayout({...layout, columns: columns + 1, cells: newCells});
  };
  const toggleDrag = () => {
    dragging.bg === 'white' ? setDragging({bg: 'grey', hover: 'blue'}) : setDragging({bg: 'white', hover: 'white'})
  }
  console.log(cells);
  return (
    <AppWrap visible={dragging} className="App">
      <Wrapper columns={columns} rows={rows}>
        {cells.map((cell) => {
          return <Cell key={cell.uuid} cell={cell} />;
        })}
      </Wrapper>
      <button onClick={() => addRow()}>Add Row</button>
      <button onClick={() => addColumn()}>Add Column</button>
      <button onClick={() => toggleDrag()}>toggle Drag</button>
    </AppWrap>
  );
};

const AppWrap = styled.div`
  --dragLayerBg: ${prop => prop.visible.bg};
  --dragLayerBgHover: ${prop => prop.visible.hover};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, auto);
  grid-template-rows: repeat(${(props) => props.rows}, auto);
  justify-items: center;
  justify-content: center;
`;

export default Roadmap;
