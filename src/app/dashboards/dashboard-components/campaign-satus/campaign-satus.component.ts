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


export interface campaign2ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legends: ApexLegend;
  labels: any;
  name: any;
  tooltip: ApexTooltip;
  colors: string[];
  plotOptions: ApexPlotOptions
}

@Component({
  selector: 'app-campaign-satus',
  templateUrl: './campaign-satus.component.html',
  styleUrls: ['./campaign-satus.component.css']
})
export class CampaignSatusComponent implements OnInit {
  
  @ViewChild("chart") chart3: ChartComponent = Object.create(null);
  public campaign2ChartOptions: Partial<campaign2ChartOptions>;
  constructor() { 

    this.campaign2ChartOptions = {
      series: [55, 10, 18],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        type: 'donut',
        height: 240
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70px',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '16px',
                color: undefined,
                offsetY: 10
              },
              value: {
                show: false,
                color: '#99abb4',
              },
              total: {
                show: true,
                label: 'Status',
                color: '#99abb4',
              }
            }
          }
        }
      },
      tooltip: {
        fillSeriesColor: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0
      },
      legends: {
        show: false,
      },
      labels: ['Pending', 'Failed', 'Success'],
      colors: ["#137eff", "#5ac146", "#8b5edd"],
    };
  }

  ngOnInit(): void {
  }

}
