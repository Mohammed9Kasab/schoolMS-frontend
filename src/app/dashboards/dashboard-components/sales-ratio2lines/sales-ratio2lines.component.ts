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

// 
// sales ratio
// 
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
  selector: 'app-sales-ratio2lines',
  templateUrl: './sales-ratio2lines.component.html',
  styleUrls: ['./sales-ratio2lines.component.css']
})
export class SalesRatio2linesComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesratioChartOptions: Partial<salesratioChartOptions>;

  constructor() { 

    this.salesratioChartOptions = {
      series: [
        {
          type: "area",
          name: 'Xtreme Admin',
          data: [24.5, 30.3, 39.7, 30, 24.5, 33.6, 45, 40]
        },
        {
          type: "area",
          name: 'Materialpro admin',
          data: [8.9, 6.6, 22.9, 6.8, 15.5, 10.1, 8.8, 18.4]
        }
      ],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: 278,
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
        type: "solid",
        opacity: 0.1,
        gradient: {
          shade: "light",
          type: "vertical",
          gradientToColors: ["#137eff", "#fff"],
          opacityFrom: 0.2,
          opacityTo: 0,
        },
      },
      stroke: {
        curve: 'smooth',
        width: '2',
      },
      colors: ['#137eff', '#5ac146'],
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
          7,
          8
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
    };
  }

  ngOnInit(): void {
  }

}
