import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid,
  ApexFill, ApexNonAxisChartSeries, ApexStroke, ApexPlotOptions
} from 'ng-apexcharts';


export type lineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: any;
  fill: ApexFill;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  colors: string[];
  markers: any;
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild("linechart") chart4: ChartComponent = Object.create(null);
  public lineChartOptions: Partial<lineChartOptions>;

  constructor() {

    this.lineChartOptions = {
      series: [
        {
          name: '',
          data: [12, 19, 3, 5]
        },
      ],
      chart: {
        type: "line",
        fontFamily: 'Rubik,sans-serif',
        height: "40",
        toolbar: {
          show: false,
        },
        sparkline: { enabled: true },
      },
      markers: {
        size: 3,
        strokeColors: 'transparent',
      },
      colors: ['#8b5edd'],
      stroke: {
        curve: "smooth",
        width: 2,
      },
      tooltip: {
        theme: "dark",
        fillSeriesColor: false,
        marker: {
          show: true,
          fillColors: ["#8b5edd"]
        },
        x: {
          show: false
        },
      },
    }
   }

  ngOnInit(): void {
  }

}
