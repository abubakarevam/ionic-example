import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {
  public apiKey: String;

  constructor(private http: HttpClient) { }

  login() {
    return this.http.post(environment.baseUrl + '/authenticate/evam-login', {username: "sasa", password: "123456"});
  }

  getWorkspace() {
    return this.http.get(environment.baseUrl + '/workspace/folder');
  }

  getFolder(folderId: number) {
    return this.http.get(environment.baseUrl + '/workspace/folder/' + folderId);
  }
}

export class TokenClass {
  accessToken: String;
  refreshToken: String;
}