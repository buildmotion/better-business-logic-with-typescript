import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TacoService } from './taco.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    TacoService
  ]
})
export class TacoModule { }
