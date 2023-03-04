import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
@Component({
  templateUrl: "./dashboard2.component.html",
  styleUrls: ["./dashboard2.component.css"],
})
export class Dashboard2Component implements AfterViewInit {


  public config: PerfectScrollbarConfigInterface = {};

  constructor() {

  }

  ngAfterViewInit() {
  }
}
