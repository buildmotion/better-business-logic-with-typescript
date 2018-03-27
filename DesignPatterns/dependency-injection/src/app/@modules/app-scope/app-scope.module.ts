import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AService } from './a.service';
import { AConfig } from './a-config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AService
  ]
})
export class AppScopeModule {
  static forRoot(config: AConfig) {
    return {
      ngModule: AppScopeModule,
      providers: [{provide: AConfig, useValue: config}]
    };
  }
 }
