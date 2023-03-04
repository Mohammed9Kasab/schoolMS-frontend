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




export type referralChartOptions = {
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
  selector: 'app-earning',
  templateUrl: './earning.component.html',
  styleUrls: ['./earning.component.css']
})
export class EarningComponent implements OnInit {

  @ViewChild("revenuechart") chart2: ChartComponent = Object.create(null);
  public referralChartOptions: Partial<referralChartOptions>;

  constructor() { 
    this.referralChartOptions = {
      series: [
        {
          name: '',
          data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3, 0.5, 1.2, 1.0, 0.4, 0.9]
        },
      ],
      chart: {
        type: 'bar',
        fontFamily: 'Rubik,sans-serif',
        height: 50,
        sparkline: {
          enabled: true
        }
      },
      fill: {
        colors: ['#2962ff'],
        opacity: 1,
      },
      stroke: {
        show: true,
        width: 15,
        colors: ["transparent"],
      },
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
        marker: {
          show: true,
          fillColors: ["#2962ff"]
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
