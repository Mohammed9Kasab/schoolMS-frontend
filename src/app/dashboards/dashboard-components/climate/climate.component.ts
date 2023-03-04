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


export type weatherChartOptions = {
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
};

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {

  @ViewChild("chart") chart8: ChartComponent = Object.create(null);
  public weatherChartOptions: Partial<weatherChartOptions>;

  constructor() { 

    this.weatherChartOptions = {
      series: [
        {
          name: 'weather',
          data: [22.5,
            34.3,
            24.7,
            28.5,
            11.4,
            30.6,
            44.5,
            34]
        },
      ],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: 110,
        type: 'line',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 5,
          color: '#000',
          opacity: 0.1
        }
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        lineCap: 'round',
        width: 3,
        colors: ["#fff"]
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      markers: {
        show: false
      },
      tooltip: {
        theme: "dark",
        style: {
          fontSize: '13px',
          fontFamily: 'Rubik,sans-serif',
        },
        x: {
          show: false,
        },
        y: {
          formatter: undefined,
        },
        marker: {
          show: false,
        },
        followCursor: true,
      },
      legend: {
        show: false
      }
    };
  }

  ngOnInit(): void {
  }

}
