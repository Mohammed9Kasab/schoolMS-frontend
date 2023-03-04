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

export type visitstatChartOptions = {
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
  selector: 'app-visit-statistic',
  templateUrl: './visit-statistic.component.html',
  styleUrls: ['./visit-statistic.component.css']
})
export class VisitStatisticComponent implements OnInit {

  @ViewChild("visitstatchart") chart6: ChartComponent = Object.create(null);
  public visitstatChartOptions: Partial<visitstatChartOptions>;

  constructor() {
    this.visitstatChartOptions = {
      series: [
        {
          name: 'Site A',
          data: [0, 130, 80, 70, 180, 105, 250]
        },
        {
          name: 'Site B',
          data: [0, 100, 60, 200, 150, 90, 150]
        }
      ],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: 400,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      stroke: {
        curve: 'straight',
        width: '0',
      },
      colors: ['rgba(223,226,233, 0.3)', '#137eff'],
      fill: {
        type: 'solid',
        colors: ['rgba(223,226,233, 0.3)', '#137eff'],
        opacity: [0.8, 0.3]
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
        strokeDashArray: 0,
        borderColor: 'rgba(0,0,0,0.1)',
        // xaxis: {
        //   lines: {
        //     show: true
        //   }
        // },
        // yaxis: {
        //   lines: {
        //     show: true
        //   }
        // }
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
