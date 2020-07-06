import {
  ChartType,
  FirstDataRenderedEvent,
  ProcessChartOptionsParams,
  CreateRangeChartParams,
  ChartOptions,
  LegendPosition
} from "ag-grid-community";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import {ColumnApi} from "ag-grid-community/dist/lib/columnController/columnApi";
import {GridReadyEvent} from "ag-grid-community/dist/lib/events";
import {AgGridReact} from 'ag-grid-react';
import React, {useState} from 'react';
import {columnDefs, defaultColDef} from "./columnDefs";
import data from "./data";

function processChartOptions(params: ProcessChartOptionsParams): ChartOptions<any> {
  const opts: any = params.options;
  opts.title.enabled = true;
  opts.title.text = 'Medals by Age';
  opts.legend.position = LegendPosition.Bottom;
  opts.seriesDefaults.tooltip.renderer = function (params: any) {
    const titleStyle = params.color
      ? ' style="color: white; background-color:' + params.color + '"'
      : '';
    const title = params.title
      ? '<div class="ag-chart-tooltip-title"' +
      titleStyle +
      '>' +
      params.title +
      '</div>'
      : '';
    const value = params.datum[params.yKey]
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return (
      title +
      '<div class="ag-chart-tooltip-content" style="text-align: center">' +
      value +
      '</div>'
    );
  };
  if (opts.xAxis) {
    opts.xAxis.label.rotation = 0;
  }
  if (opts.yAxis) {
    opts.yAxis.label.rotation = 0;
  }
  return opts;
}

export default function GridExample() {

  const [columnApi, setColumnApi] = useState<ColumnApi>();

  function onGridReady(event: GridReadyEvent): void {
    setColumnApi(event.columnApi);
  }

  function onFirstDataRendered(params: FirstDataRenderedEvent): void {
    const createRangeChartParams: CreateRangeChartParams = {
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 79,
        columns: ['age', 'gold', 'silver', 'bronze'],
      },
      chartType: ChartType.GroupedColumn,
      chartContainer: document.querySelector<HTMLElement>('#myChart')!,
      aggFunc: 'sum',
    };
    params.api.createRangeChart(createRangeChartParams);
  }

  return (
    <div style={{width: '100%', height: '100%'}}>
      <div className="wrapper">
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            popupParent={document.body}
            enableRangeSelection={true}
            enableCharts={true}
            processChartOptions={processChartOptions}
            onGridReady={onGridReady}
            onFirstDataRendered={onFirstDataRendered}
            rowData={data}
          />
        </div>
        <div id="myChart" className="ag-theme-alpine my-chart"></div>
      </div>
    </div>
  );

};
