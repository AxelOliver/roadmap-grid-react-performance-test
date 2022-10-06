import { useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";
import "../App.css";
import { v4 } from "uuid";

const createNCells = (n) => {
  let cells = []
  for (let index = 0; index < n; index++) {
    cells.push({uuid: v4()});
  }
  return cells
}

const Roadmap = () => {
  const [layout, setLayout] = useState({rows: 100, columns: 20, cells: createNCells(2000)});
  const [dragging, setDragging] = useState(false)

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
        return [...acc, current, {uuid: v4()}];
      } else {
        return [...acc, current];
      }
    }, []);
    setLayout({...layout, columns: columns + 1, cells: newCells});
  };
  const toggleDrag = () => {
    dragging === false ? setDragging(true) : setDragging(false)
  }
  return (
    <AppWrap dragging={dragging} className="App">
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
  --DragLayerOpacity: ${prop => prop.dragging === false ? '100%' : '0%'};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, auto);
  grid-template-rows: repeat(${(props) => props.rows}, auto);
  justify-items: center;
  justify-content: center;
`;

export default Roadmap;
