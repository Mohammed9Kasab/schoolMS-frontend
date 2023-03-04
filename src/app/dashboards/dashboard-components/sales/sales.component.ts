import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexAxisChartSeries,
  ApexYAxis,
  ApexTheme,
  ApexFill,
  ApexGrid,
  ApexResponsive,
  ApexTitleSubtitle
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};


export type salesChartOptions = {
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
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  @ViewChild("chart") chart3: ChartComponent = Object.create(null);
  public salesChartOptions: Partial<salesChartOptions>;

  constructor() {     
    this.salesChartOptions = {
    series: [
      {
        name: 'This week',
        data: [24.5,
          28.3,
          42.7,
          32,
          34.9,
          48.6,
          40]
      },
      {
        type: "area",
        name: 'Last week',
        data: [8.9,
          5.8,
          21.9,
          5.8,
          16.5,
          6.5,
          14.5]
      }
    ],
    chart: {
      fontFamily: 'Rubik,sans-serif',
      height: 250,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 3,
      strokeColors: "transparent"
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    stroke: {
      curve: 'smooth',
      width: '3',
    },
    colors: ['#137eff', '#ced4da'],
    legend: {
      show: false,
    },
    grid: {
      show: true,
      strokeDashArray: 2,
      borderColor: 'rgba(0,0,0,0.1)',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: 'category',
      categories: [
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      labels: {
        style: {
          colors: '#a1aab2'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#a1aab2'
        }
      }
    },
    tooltip: {
      theme: 'dark'
    }
  };}

  ngOnInit(): void {
  }

}
