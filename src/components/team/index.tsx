import * as React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useRCPContext } from "../../context";
import { ColDef } from "ag-grid-community";

export default function Team() {
  const [columnDefs] = React.useState([
    { field: "name" },
    { field: "email" },
    { field: "gender" },
    { field: "department" },
    { field: "dob" },
  ]);
  const { RCPState } = useRCPContext();
  const { team: rowData } = RCPState;

  const defaultColDef:ColDef = React.useMemo(() => {
    return {
      sortable: true,
      resizable: true,
      enableValue: true,
      filter: "agTextColumnFilter",
      menuTabs: ["filterMenuTab"],
    };
  }, []);

  const containerStyle = React.useMemo(
    () => ({ width: "100%", height: "100%" }),
    []
  );
  const gridStyle = React.useMemo(
    () => ({ height: "100%", width: "100%" }),
    []
  );

  return (
    <div className="ag-theme-alpine" style={containerStyle}>
      <div style={gridStyle}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
}
