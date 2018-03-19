import { Inject, Injectable } from '@angular/core';
import {
  Http,
  RequestMethod,
  Response,
  Headers,
  RequestOptions
} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/cache';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { LoggingService, Severity } from '@buildmotion/logging';
import { HttpBaseService, ServiceResponse } from '@buildmotion/foundation';

@Injectable()
export class SomeHttpService {

  url: string = '/api/some';
  data: Observable<Response>;
  serviceName: string;

  constructor(
    @Inject(Http) public http: Http,
    @Inject(HttpBaseService) public httpService: HttpBaseService,
    public loggingService: LoggingService
  ) {
    this.serviceName = 'SomeHttpService';
  }

  ProcessSequence(sequence: number): Observable<ServiceResponse> {
    const response = new ServiceResponse();
    response.IsSuccess = true;
    response.Message = `Fake message from ${this.serviceName}`;
    response.Data = sequence + 1;
    const subject: BehaviorSubject<any> = new BehaviorSubject(response);
    return subject.asObservable();
  }
}
