import {
  Component, Input, OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit,
  AfterContentChecked, AfterViewChecked, AfterViewInit, SimpleChanges
} from '@angular/core';
import { SomeService } from '../some-business/some.service';
import { ComponentBase } from '@buildmotion/core';
import { LoggingService } from '@buildmotion/logging';
import { Router } from '@angular/router';
import { Severity } from '@buildmotion/logging';
import { ErrorResponse } from '@buildmotion/foundation';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
  export class HelloComponent extends ComponentBase implements OnChanges, OnInit, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  subject: Subject<number> = new Subject();
  componentEvents: Array<string> = [];
  useService = true;
  title: 'HelloComponent';
  @Input() helloTarget: string;
  sequence: number;
  constructor(
    private someService: SomeService,
    loggingService: LoggingService,
    router: Router
  ) {
    super(`HelloComponent`, loggingService, router);
    this.sequence = 1;
    this.logSequence(`constructor`);
    this.helloTarget = this.sequence.toString();
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
    this.helloTarget = this.sequence.toString();
    const item = `HelloComponent.${source}.${this.sequence}`;
    this.componentEvents.push(item);
    console.log(item);
  }

  handleProcessSequenceResponse(response) {
    const functionName = 'handleProcessSequenceResponse';
    this.loggingService.log(this.componentName, Severity.Information, `[${functionName}]: Preparing to handle the response from the [SecurityService] in the ${this.componentName}.`);
    if (response) {
      if (response.IsSuccess) {
        this.subject.next(response.Data);
        this.loggingService.log(this.componentName, Severity.Information, `Successfully processed request to process [sequence]: ${this.sequence}`);
      } else {
        this.handleServiceErrors(response as ErrorResponse, this.someService.serviceContext);
      }
    } else {
      this.handleServiceErrors(this.createErrorResponse(`Processing error response.`));
    }
  }

  updateSequence() {
    if (this.useService) {
      // USE THE SERVICE TO PROCESS A REQUEST (BUSINESS LOGIC) AND HANDLE THE OBSERVABLE
      this.someService.ProcessSequence(this.sequence).subscribe(
        response => this.handleProcessSequenceResponse(response),
        error => this.handleServiceErrors(error, this.someService.serviceContext),
        () => this.finishRequest(`Finishing request to process sequence value: ${this.sequence}`)
      );
    } else {
      this.sequence = this.sequence + 1;
    }

    this.helloTarget = this.sequence.toString();
  }

  // showAngular(event: any) {
  //   if (this.displayNgMethods) {
  //     this.displayNgMethods = false;
  //   } else {
  //     this.displayNgMethods = true;
  //   }
  // }

  // showActions(event: any) {
  //   if (this.showActions) {
  //     this.useService = false;
  //   } else {
  //     this.useService = true;
  //   }
  // }

  ngOnChanges(changes: SimpleChanges): void {
    this.logSequence(`ngOnChanges`);
  }
  ngOnInit(): void {
    this.sequence = 0;
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
