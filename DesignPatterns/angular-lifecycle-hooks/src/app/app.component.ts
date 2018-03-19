import { Component, OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit, 
  AfterContentChecked, AfterViewChecked, AfterViewInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit,
AfterContentChecked, AfterViewChecked, AfterViewInit {
  title = 'AppComponent';
  sequence: number;

  constructor() {
    this.logSequence('constructor');
  }

  logSequence(source: string, changes?: SimpleChanges) {
    if (this.sequence) {
      this.sequence = this.sequence + 1;
    } else {
      this.sequence = 1;
    }
    if (changes) {
      console.log(`AppComponent.${source}.${this.sequence}`);
    } else {
      console.log(`AppComponent.${source}.${this.sequence}`);
    }
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
