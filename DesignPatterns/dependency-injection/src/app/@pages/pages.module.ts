import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { AppScopeModule } from '../@modules/app-scope/app-scope.module';
import { ComponentScopeModule } from '../@modules/component-scope/component-scope.module';
import { AService } from '../@modules/app-scope/a.service';
import { AConfig } from '../@modules/app-scope/a-config';


@NgModule({
  imports: [
    AppScopeModule.forRoot({source: 'PagesModule', instance: 1, timestamp: new Date()}),
    CommonModule,
    ComponentScopeModule
  ],
  declarations: [
    OneComponent, TwoComponent, ThreeComponent],
  exports: [
    OneComponent, TwoComponent, ThreeComponent
  ],
  providers: [
    AService
  ]
})
export class PagesModule { }
