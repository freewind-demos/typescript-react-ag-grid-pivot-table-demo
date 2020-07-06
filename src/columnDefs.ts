export const defaultColDef = {
  editable: true,
  sortable: true,
  flex: 1,
  minWidth: 100,
  filter: true,
  resizable: true,
};

export const columnDefs = [
  {
    field: 'athlete',
    width: 150,
    chartDataType: 'category',
  },
  {
    field: 'age',
    chartDataType: 'category',
    sort: 'asc',
  },
  {field: 'sport'},
  {
    field: 'year',
    chartDataType: 'excluded',
  },
  {
    field: 'gold',
    chartDataType: 'series',
  },
  {
    field: 'silver',
    chartDataType: 'series',
  },
  {field: 'bronze'},
]
