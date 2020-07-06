export const autoGroupColumnDef =  {
  minWidth: 250
}

export const defaultColDef = {
  flex: 1,
  minWidth: 150,
  sortable: true,
  resizable: true,
};

export const columnDefs = [
  {
    field: 'country',
    rowGroup: true,
    enableRowGroup: true,
  },
  {
    field: 'year',
    pivot: true,
    enablePivot: true,
  },
  { field: 'date' },
  { field: 'sport' },
  {
    field: 'gold',
    // Remember to mark value columns with enableValue=true when using the Tool Panel.
    // Otherwise you won't be able to drag and drop them to the 'Values' section in the Tool Panel.
    enableValue: true,
    aggFunc: 'sum',
  },
  {
    field: 'silver',
    enableValue: true,
    aggFunc: 'sum',
  },
  {
    field: 'bronze',
    enableValue: true,
    aggFunc: 'sum',
  },
]
