import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeService } from './some.service';
import { BusinessProviderService } from './business/business-provider.service';
import { LoggingService } from '@buildmotion/logging';
import { SomeHttpService } from './business/some-http.service';
import { HttpModule } from '@angular/http';
import { HttpBaseService } from '@buildmotion/foundation';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    SomeService,
    BusinessProviderService,
    LoggingService,
    HttpBaseService,
    SomeHttpService,
  ]
})
export class SomeBusinessModule { }
