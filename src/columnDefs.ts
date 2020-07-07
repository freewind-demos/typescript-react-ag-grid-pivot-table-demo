import {ColDef, ColGroupDef} from "ag-grid-community";

export const autoGroupColumnDef = {
  minWidth: 250
}

export const defaultColDef = {
  flex: 1,
  minWidth: 150,
  sortable: true,
  resizable: true,
};

export function buildColumnDefs(reportRecords: { [key: string]: any }[] | undefined): (ColDef | ColGroupDef)[] {
  const record0 = reportRecords?.[0];
  if (!record0) {
    return [];
  }
  const names = Object.keys(record0);
  const colDefs = names.map(name => ({
    field: name,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
  }));
  return colDefs;
}
