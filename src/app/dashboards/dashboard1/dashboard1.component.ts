import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

@Component({
  templateUrl: "./dashboard1.component.html",
  styleUrls: ["./dashboard1.component.css"],
})
export class Dashboard1Component implements AfterViewInit {


  public config: PerfectScrollbarConfigInterface = {};

 
  range = false;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = "Region";
  showYAxisLabel = true;
  yAxisLabel = "Sales";
  showGridLines = true;
  innerPadding = 0;
  autoScale = true;
  timeline = false;
  barPadding = 5;
  groupPadding = 0;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  view = "";
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  arcWidth = 0.25;
  rangeFillOpacity = 0.15;

  colorScheme = {
    domain: ["#4fc3f7", "#fb8c00", "#7460ee", "#fa5838", "#5ac146", "#137eff"],
  };
  schemeType = "ordinal";

  constructor() {
  }

  ngAfterViewInit() {

  }
}
