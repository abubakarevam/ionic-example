import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public dashboard = {metaData: {}} as any;

  constructor(private dashboardService: DashboardService, private router: Router) {
    this.getDashboard(this.router.url.replace(/.*\//g, ''));

    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     console.log(this.router.getCurrentNavigation().extras.state.dashboardName);
    //     this.getDashboard(this.router.getCurrentNavigation().extras.state.dashboardName);
    //   }
    //   else {
    //     console.log(this.router.url.replace(/.*\//g, ''));
    //     this.getDashboard(this.router.url.replace(/.*\//g, ''));
    //   }
    // });
  }

  ngOnInit() { }

  getDashboard(dashboardName) {
    this.dashboardService.getDashboard(dashboardName).subscribe((response) => {
      this.dashboard = response['dashboard'];
      console.log(this.dashboard);
    });
  }

}
