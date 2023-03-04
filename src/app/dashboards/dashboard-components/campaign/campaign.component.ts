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


// 
// Campaign
// 
export interface campaignChartOptions {
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
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public campaignChartOptions: Partial<campaignChartOptions>;

  constructor() {

    this.campaignChartOptions = {
      series: [35, 15, 10, 18],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        type: 'donut',
        height: 130
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75px',
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
      labels: ['Un-opened', 'Clicked', 'Open', 'Bounced'],
      colors: ["#137eff", "#8b5edd", "#5ac146", "#eceff1"],
    };
   }

  ngOnInit(): void {
  }



}
