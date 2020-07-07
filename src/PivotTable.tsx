import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import {AgGridReact} from 'ag-grid-react';
import React from 'react';
import {autoGroupColumnDef, buildColumnDefs, defaultColDef} from "./columnDefs";
import data from "./data";

export default function PivotTable() {

  return (
    <div style={{width: '100%', height: '100%'}}>
      <div
        id="myGrid"
        style={{
          height: '100%',
          width: '100%',
        }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          columnDefs={buildColumnDefs(data)}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          pivotMode={true}
          showToolPanel={true}
          rowData={data}
        />
      </div>
    </div>
  );

};
