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



export type mainbalanceChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
  fill: ApexFill;
};


@Component({
  selector: 'app-main-balance',
  templateUrl: './main-balance.component.html',
  styleUrls: ['./main-balance.component.css']
})
export class MainBalanceComponent implements OnInit {

    @ViewChild("mainbalancechart") chart5: ChartComponent = Object.create(null);
  public mainbalanceChartOptions: Partial<mainbalanceChartOptions>;

  constructor() { 
    this.mainbalanceChartOptions = {
      series: [
        {
          name: 'A',
          data: [3, 8, 2, 3, 2, 5, 9, 6]
        },
        {
          name: 'B',
          data: [7, 6, 5, 8, 6, 7, 5, 9]
        }
      ],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: 50,
        type: 'area',
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      stroke: {
        curve: 'smooth',
        width: '2',
      },
      colors: ['#137eff', '#e9ecef'],
      fill: {
        type: 'solid',
        colors: ['#137eff', '#e9ecef'],
        opacity: 1
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      tooltip: {
        theme: 'dark'
      }
    };

  }

  ngOnInit(): void {
  }

}
