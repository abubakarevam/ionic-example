import { Component } from '@angular/core';
import * as HighCharts from 'highcharts';
import { DashboardService } from '../services/dashboard.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public dashboards;

  constructor(private dashboardService: DashboardService, private router: Router) {}

  ionViewDidEnter() {
    // this.plotSimpleBarChart();
    this.getDashboards();
  }

  getDashboards() {
    this.dashboardService.getDashboards().subscribe((response) => {
      this.dashboards = response['dashboards'];
    });
  }

  goToDashboard(dashboardName) {
    const navExtras: NavigationExtras = {state: {}};
    // this.router.navigate(['dashboard/' + dashboardName], navExtras);
    this.router.navigate(['dashboard/' + dashboardName], navExtras);
  }

  plotSimpleBarChart() {
    let myChart = HighCharts.chart('highcharts', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      credits:{
        enabled: false,
      },
      series: [
        {
          name: 'Jane',
          type: undefined,
          data: [1, 0, 4]
        },
        {
          name: 'John',
          type: undefined,
          data: [5, 7, 3]
        }]
    });
  }

}
