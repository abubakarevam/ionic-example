import { Component } from '@angular/core';
import { ScenarioService, TokenClass } from '../services/scenario.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public workspace: any;
  public defaultThumbnail = "../../assets/evam/scenario-icon.png";
  
  constructor(private scenarioService: ScenarioService, private storage: Storage) {}

  ngOnInit() {
    let vm = this;
    this.scenarioService.login().subscribe((response: TokenClass) => {
      this.storage.set('evamAccessToken', response.accessToken);
      this.scenarioService.apiKey = response.accessToken;
      setTimeout(function() {
        vm.getWorkspace();
      });
    });
  }
  
  getWorkspace() {
    this.scenarioService.getWorkspace().subscribe((response) => {
      this.workspace = response;
    });
  }

  getFolder(folderId: number) {
    if(folderId) {
      this.scenarioService.getFolder(folderId).subscribe((response) => {
        this.workspace = response;
        console.log(this.workspace);
      });
    }
    else {
      this.getWorkspace();
    }
  }
}
