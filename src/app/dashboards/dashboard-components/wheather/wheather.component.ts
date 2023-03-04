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
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent implements OnInit {

  @ViewChild("chart") chart4: ChartComponent = Object.create(null);
  public weatherChartOptions: Partial<weatherChartOptions>;

  constructor() { 
    this.weatherChartOptions = {
      series: [
        {
          name: 'Weather',
          data: [38,
            35.3,
            42.7,
            32,]
        },
      ],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: 120,
        type: 'area',
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 2,
        strokeColors: 'transparent'
      },
      stroke: {
        curve: 'smooth',
        width: '1',
      },
      colors: ['#5ac146'],
      legend: {
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
