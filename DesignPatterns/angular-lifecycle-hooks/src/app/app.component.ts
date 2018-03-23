import { Component, OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit, 
  AfterContentChecked, AfterViewChecked, AfterViewInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ComponentBase } from '@buildmotion/core';
import { LoggingService } from '@buildmotion/logging';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends ComponentBase implements OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  title = 'AppComponent';
  sequence = 1;
  subject: Subject<number> = new Subject();
  componentEvents: Array<string> = [];

  constructor(
    loggingService: LoggingService,
    router: Router
  ) {
    super(`AppComponent`, loggingService, router);
    this.logSequence('constructor');
  }

  subscription = this.subject.subscribe(
    response => this.handleUpdate(response),
    error => this.handleServiceErrors(error, null),
    () => this.finishRequest(``)
  );

  handleUpdate(response: number) {
    // need to show the data on the web page; updated item
    this.sequence = response;
  }

  logSequence(source: string, changes?: SimpleChanges) {
    // if (this.sequence) {
    //   this.sequence = this.sequence + 1;
    // } else {
    //   this.sequence = 1;
    // }
    // if (changes) {
    //   console.log(`AppComponent.${source}.${this.sequence}`);
    // } else {
    //   console.log(`AppComponent.${source}.${this.sequence}`);
    // }
    this.subject.next(this.sequence + 1);
    const item = `AppComponent.${source}.${this.sequence}`;
    this.componentEvents.push(item);
    console.log(item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logSequence(`ngOnChanges`);
  }
  ngOnInit(): void {
    this.logSequence(`ngOnInit`);
  }
  ngDoCheck(): void {
    this.logSequence(`ngDoCheck`);
  }
  ngOnDestroy(): void {
    this.logSequence(`ngOnDestroy`);
  }
  ngAfterContentInit(): void {
    this.logSequence(`ngAfterContentInit`);
  }
  ngAfterContentChecked(): void {
    this.logSequence(`ngAfterContentChecked`);
  }
  ngAfterViewChecked(): void {
    this.logSequence(`ngAfterViewChecked`);
  }
  ngAfterViewInit(): void {
    this.logSequence(`ngAfterViewInit`);
  }
}
