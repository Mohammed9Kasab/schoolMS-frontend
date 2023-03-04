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
  selector: 'app-user-campaign',
  templateUrl: './user-campaign.component.html',
  styleUrls: ['./user-campaign.component.css']
})
export class UserCampaignComponent implements OnInit {

  @ViewChild('campaign2chart') chart7: ChartComponent = Object.create(null);
  public campaign2ChartOptions: Partial<campaign2ChartOptions>;

  constructor() {

    this.campaign2ChartOptions = {
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
      labels: ['Un-opened', 'Clicked', 'Open', 'Bounce'],
      colors: ["#137eff", "#8b5edd", "#5ac146", "#eceff1"],
    };
   }

  ngOnInit(): void {
  }

}
