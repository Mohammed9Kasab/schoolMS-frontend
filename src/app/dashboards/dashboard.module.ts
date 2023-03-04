import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgApexchartsModule } from "ng-apexcharts";

import { DashboardRoutes } from './dashboard.routing';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { NewVariablesComponent } from './dashboard-components/new-variables/new-variables.component';
import { CampaignComponent } from './dashboard-components/campaign/campaign.component';
import { SalesComponent } from './dashboard-components/sales/sales.component';
import { WheatherComponent } from './dashboard-components/wheather/wheather.component';
import { EarningComponent } from './dashboard-components/earning/earning.component';
import { UsersComponent } from './dashboard-components/users/users.component';
import { LatestSalesComponent } from './dashboard-components/latest-sales/latest-sales.component';
import { RegionSalesComponent } from './dashboard-components/region-sales/region-sales.component';
import { CommentsComponent } from './dashboard-components/comments/comments.component';
import { TodoListComponent } from './dashboard-components/todo-list/todo-list.component';
import { SalesRatioComponent } from './dashboard-components/sales-ratio/sales-ratio.component';
import { SalesGraphComponent } from './dashboard-components/sales-graph/sales-graph.component';
import { ClimateComponent } from './dashboard-components/climate/climate.component';
import { BarChartComponent } from './dashboard-components/bar-chart/bar-chart.component';
import { LineChartComponent } from './dashboard-components/line-chart/line-chart.component';
import { MainBalanceComponent } from './dashboard-components/main-balance/main-balance.component';
import { LatestSalesListComponent } from './dashboard-components/latest-sales-list/latest-sales-list.component';
import { VisitStatisticComponent } from './dashboard-components/visit-statistic/visit-statistic.component';
import { UserCampaignComponent } from './dashboard-components/user-campaign/user-campaign.component';
import { ClientsComponent } from './dashboard-components/clients/clients.component';
import { ModernVariableComponent } from './dashboard-components/modern-variable/modern-variable.component';
import { SalesRatio2linesComponent } from './dashboard-components/sales-ratio2lines/sales-ratio2lines.component';
import { TemperatureComponent } from './dashboard-components/temperature/temperature.component';
import { UserPercentageComponent } from './dashboard-components/user-percentage/user-percentage.component';
import { CampaignSatusComponent } from './dashboard-components/campaign-satus/campaign-satus.component';
import { YearlyComparisonComponent } from './dashboard-components/yearly-comparison/yearly-comparison.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes),
    PerfectScrollbarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxChartsModule,
    NgxDatatableModule,
    NgApexchartsModule
  ],
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    NewVariablesComponent,
    CampaignComponent,
    SalesComponent,
    WheatherComponent,
    EarningComponent,
    UsersComponent,
    LatestSalesComponent,
    RegionSalesComponent,
    CommentsComponent,
    TodoListComponent,
    SalesRatioComponent,
    SalesGraphComponent,
    ClimateComponent,
    BarChartComponent,
    LineChartComponent,
    MainBalanceComponent,
    LatestSalesListComponent,
    VisitStatisticComponent,
    UserCampaignComponent,
    ClientsComponent,
    ModernVariableComponent,
    SalesRatio2linesComponent,
    TemperatureComponent,
    UserPercentageComponent,
    CampaignSatusComponent,
    YearlyComparisonComponent
  ]
})
export class DashboardModule { }
