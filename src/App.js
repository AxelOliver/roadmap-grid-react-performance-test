import { useState } from "react";
import "./App.css";
import Cell from "./Cell";

const App = () => {
  const [cells, setCells] = useState([new Date().getTime()]);
  const [rows, setRows] = useState(1)
  const [columns, setColumns] = useState(1)
  const addRow = () => {
    for (let index = 0; index < rows; index++) {
      for (let index = 0; index < columns.length; index++) {
        setCells(cells.concat(new Date().getTime()))
      }
  }}
  const addColumn = () => {
    for (let index = 0; index <= rows; index++) {
      for (let index = 0; index <= columns.length; index++) {
        setCells(cells.concat(new Date().getTime()))
      }
  }}
  return (
    <div className="App">
      <div className="wrapper">
        {cells.map((cellUuid) => {
            return (
              <Cell cellUuid={cellUuid} />
            );
          })}
      </div>
      <button onClick={() => addRow()}>Add Row</button>
      <button onClick={() => addColumn()}>Add Column</button>
    </div>
  );
};

export default App;
