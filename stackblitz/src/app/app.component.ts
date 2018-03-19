import { Component, OnInit } from '@angular/core';
import {  } from '@angular/common';

import sdk from '@stackblitz/sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  gitHubRepo: string = `buildmotion/better-business-logic-with-typescript/tree/master/DesignPatterns/angular-lifecycle-hooks`;  
  // gitHubRepo: string = `buildmotion/custom-angular-modules/tree/master/source/apps/ngAppOne`;  
  title = 'Stackblitz :: template method pattern app';

  ngOnInit(): void {
    // load github repo: buildmotion/better-business-logic-with-typescript/tree/master/DesignPatterns/template-method
    sdk.embedGithubProject('stackblitz-app', this.gitHubRepo, {height: 820});
  }
}
