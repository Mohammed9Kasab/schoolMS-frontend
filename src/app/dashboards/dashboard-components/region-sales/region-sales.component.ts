import { Component, OnInit, ViewChild } from "@angular/core";
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
  ApexTitleSubtitle,
} from "ng-apexcharts";

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

export type ToplocationsChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
  colors: string[];
  theme: ApexTheme;
  responsive: ApexResponsive[];
  grid: ApexGrid;
};

@Component({
  selector: "app-region-sales",
  templateUrl: "./region-sales.component.html",
  styleUrls: ["./region-sales.component.css"],
})
export class RegionSalesComponent implements OnInit {
  @ViewChild("chart") chart5: ChartComponent = Object.create(null);
  public ToplocationsChartOptions: Partial<ToplocationsChartOptions>;

  constructor() {
    this.ToplocationsChartOptions = {
      series: [
        {
          name: "Countries",
          data: [44, 55, 41, 37, 22, 43, 21],
        },
      ],
      chart: {
        fontFamily: "Rubik,sans-serif",
        type: "bar",
        height: 260,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "35%",
          distributed: true,
        },
      },
      grid: {
        show: true,
        strokeDashArray: 0,
        borderColor: "rgba(0,0,0,0.1)",
      },
      colors: [
        "#4fc3f7",
        "#fb8c00",
        "#7460ee",
        "#fa5838",
        "#5ac146",
        "#137eff",
        "#c7cace",
      ],
      fill: {
        type: "solid",
        opacity: 1,
        colors: [
          "#4fc3f7",
          "#fb8c00",
          "#7460ee",
          "#fa5838",
          "#5ac146",
          "#137eff",
          "#c7cace",
        ],
      },
      xaxis: {
        categories: [
          "Italy",
          "USA",
          "Germany",
          "India",
          "France",
          "Spain",
          "Alegeria",
          "Australia",
        ],
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          options: {
            breakpoint: 1200,
            plotOptions: {
              bar: {
                columnWidth: "45%",
                distributed: true,
                startingShape: "flat",
                endingShape: "flat",
              },
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {}
}
