import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";


@Component({
  templateUrl: "./dashboard3.component.html",
  styleUrls: ["./dashboard3.component.css"],
})
export class Dashboard3Component implements AfterViewInit {

  public config: PerfectScrollbarConfigInterface = {};

  constructor() {
  }
  ngAfterViewInit() {
  }
}
