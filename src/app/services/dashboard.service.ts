import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getDashboards() {
    return this.http.get(environment.baseUrl + '/dashboard');
  }

  getDashboard(dashboardName) {
    return this.http.get(environment.baseUrl + '/dashboard/' + dashboardName);
  }
}
