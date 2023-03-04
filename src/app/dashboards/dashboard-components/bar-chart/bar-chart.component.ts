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

export type barChartOptions = {
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
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

    @ViewChild("barchart") chart3: ChartComponent = Object.create(null);
  public barChartOptions: Partial<barChartOptions>;

  constructor() { 
        this.barChartOptions = {
      series: [
        {
          name: '',
          data: [20, 55, 44, 30, 61, 48, 20]
        },
      ],
      chart: {
        type: 'bar',
        fontFamily: 'Rubik,sans-serif',
        height: 55,
        sparkline: {
          enabled: true
        }
      },
      fill: {
        colors: ['#5ac146'],
        opacity: 1,

      },
      stroke: {
        show: true,
        width: 7,
        colors: ["transparent"],
      },
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
        marker: {
          show: true,
          fillColors: ["#5ac146"]
        },
        x: {
          show: false
        },
      }
    }
  }

  ngOnInit(): void {
  }

}
