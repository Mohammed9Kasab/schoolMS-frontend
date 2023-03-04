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
  ApexXAxis,
  ApexTheme,
  ApexFill,
  ApexGrid,
  ApexResponsive,
  ApexTitleSubtitle
} from 'ng-apexcharts';


export type weather2ChartOptions = {
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
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  @ViewChild("chart") chart2: ChartComponent = Object.create(null);
  public weather2ChartOptions: Partial<weather2ChartOptions>;

  constructor() {

    this.weather2ChartOptions = {
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
        height: 78,
        type: 'line',
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
      colors: ['#fff'],
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
