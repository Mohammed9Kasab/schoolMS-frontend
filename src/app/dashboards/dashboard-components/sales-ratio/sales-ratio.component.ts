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


// 
// Sales ratio
export type salesratioChartOptions = {
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
  selector: 'app-sales-ratio',
  templateUrl: './sales-ratio.component.html',
  styleUrls: ['./sales-ratio.component.css']
})
export class SalesRatioComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesratioChartOptions: Partial<salesratioChartOptions>;

  constructor() { 
    this.salesratioChartOptions = {
      series: [
        {
          name: "Sales Ratio ",
          data: [28, 40, 36, 52, 38, 60, 55],
        },
      ],
      chart: {
        fontFamily: "Rubik,sans-serif",
        height: 230,
        type: "area",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 5,
          color: "#000",
          opacity: 0.2,
        },
      },
      grid: {
        show: true,
        borderColor: "rgba(0,0,0,.1)",
        strokeDashArray: 2,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      colors: ["#137eff"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      markers: {
        size: 3,
        strokeColors: "transparent",
      },
      xaxis: {
        categories: ["1", "2", "3", "4", "5", "6", "7", "8"],
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      fill: {
        type: "solid",
        opacity: 0.1,
        gradient: {
          shade: "light",
          type: "vertical",
          gradientToColors: ["#40c4ff", "#fff"],
          opacityFrom: 0.2,
          opacityTo: 0,
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        theme: "dark",
      },
      legend: {
        show: false,
      },
    };
   }

  ngOnInit(): void {
  }

}
