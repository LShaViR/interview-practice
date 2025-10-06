import React, { useMemo } from "react";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

import { AgGridReact } from "ag-grid-react";
// --------------------------
// Helper: generate sample data
// --------------------------
const generateData = (rows: number, cols: number) => {
  const data: Record<string, any>[] = [];
  for (let r = 1; r <= rows; r++) {
    const row: Record<string, any> = {};
    for (let c = 1; c <= cols; c++) {
      row[`col${c}`] = `R${r}C${c}`;
    }
    data.push(row);
  }
  return data;
};

const rowData = generateData(50, 20); // 50 rows, 20 columns

// --------------------------
// Production Table Component
// --------------------------
const ProductionTable: React.FC<{ rowData: Record<string, any>[] }> = ({
  rowData,
}) => {
  const columnDefs = useMemo(() => {
    const cols = [];
    for (let i = 1; i <= 20; i++) {
      cols.push({
        field: `col${i}`,
        headerName: `Column ${i}`,
      });
    }
    return cols;
  }, []);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    [],
  );

  console.log(rowData);
  console.log(columnDefs);
  console.log(defaultColDef);
  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "600px",
        width: "100%",
        overflowX: "auto",
        background: "blue",
      }}
    >
      <div style={{ background: "red" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};

// --------------------------
// App Component
// --------------------------
const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Wide Production Table</h2>
      <ProductionTable rowData={rowData} />
    </div>
  );
};

export default App;
