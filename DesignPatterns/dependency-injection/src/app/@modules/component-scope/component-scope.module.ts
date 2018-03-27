import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BService } from './b.service';
import { BConfig } from './b-config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    BService
  ]
})
export class ComponentScopeModule {
}
