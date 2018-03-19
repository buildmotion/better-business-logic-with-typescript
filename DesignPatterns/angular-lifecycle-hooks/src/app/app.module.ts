import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SomeBusinessModule } from './some-business/some-business.module';
import { RouterModule, Route } from '@angular/router';

 
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(new Array<Route>()),
    SomeBusinessModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
