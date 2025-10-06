import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [gridRow, setGridRow] = useState(10);
  const [gridCol, setGridCol] = useState(15);

  const [start, setStart] = useState<{ row: number; col: number } | null>(null);
  const [end, setEnd] = useState<{ row: number; col: number } | null>(null);
  const [isStart, setIsStart] = useState(false);

  const rows = [];
  for (let i = 0; i < gridRow; i++) {
    const cols = [];
    for (let j = 0; j < gridCol; j++) {
      cols.push(i * gridCol + j + 1);
    }
    rows.push(cols);
  }
  const [selectedRowRange, setSelectedRowRange] = useState<{
    min: number;
    max: number;
  }>({ min: 0, max: 0 });
  const [selectedColRange, setSelectedColRange] = useState<{
    min: number;
    max: number;
  }>({ min: 0, max: 0 });

  useEffect(() => {
    if (start && end) {
      setSelectedRowRange({
        min: Math.min(start.row, end.row),
        max: Math.max(start.row, end.row),
      });

      setSelectedColRange({
        min: Math.min(start.col, end.col),
        max: Math.max(start.col, end.col),
      });
    } else {
      setSelectedRowRange({ min: -1, max: -1 });

      setSelectedColRange({ min: -1, max: -1 });
    }
  }, [start, end]);

  return (
    <>
      <input
        type="number"
        value={gridRow}
        onChange={(e) => {
          setGridRow(parseInt(e.target.value) || 0);
        }}
      ></input>
      <input
        type="number"
        value={gridCol}
        onChange={(e) => {
          setGridCol(parseInt(e.target.value) || 0);
        }}
      ></input>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          marginTop: "8px",
        }}
        onMouseLeave={() => {
          setIsStart(false);
          setStart(null);
          setEnd(null);
        }}
      >
        {rows.map((row, index) => (
          <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
            {row.map((col, idx) => (
              <div
                style={{
                  height: "50px",
                  width: "50px",

                  // hides overflow
                  textOverflow: "ellipsis",

                  whiteSpace: "nowrap",
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    inRange(
                      selectedRowRange.min,
                      selectedRowRange.max,
                      index,
                    ) &&
                    inRange(selectedColRange.min, selectedColRange.max, idx)
                      ? "#86694388"
                      : "#ffffff33",
                  border: "1",
                  borderColor: "black",
                  userSelect: "none",
                }}
                onMouseDown={() => {
                  if (!isStart) {
                    setStart({ row: index, col: idx });
                    setEnd({ row: index, col: idx });
                    setIsStart(true);
                  }
                }}
                onMouseEnter={() => {
                  if (isStart) setEnd({ row: index, col: idx });
                }}
                onMouseUp={() => {
                  setIsStart(false);
                }}
              >
                {col}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        {start && end && (
          <div>
            {start.row} , {start.col} | {end.row} , {end.col}
          </div>
        )}
        <div>
          RowMin:{selectedRowRange.min} | RowMax:{selectedRowRange.max}
        </div>
        <div>
          ColMin:{selectedColRange.min} | ColMax:{selectedColRange.max}
        </div>
      </div>
    </>
  );
}

const inRange = (min: number, max: number, value: number) => {
  if (value <= max && value >= min) {
    return true;
  } else {
    false;
  }
};

export default App;
