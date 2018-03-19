import { Injectable } from '@angular/core';
import { BusinessProviderService } from './business/business-provider.service';
import { Observable } from 'rxjs/Observable';
import { ServiceResponse, ServiceBase } from '@buildmotion/foundation';
import { LoggingService } from '@buildmotion/logging';

@Injectable()
export class SomeService extends ServiceBase {

  constructor(
    private businessProvider: BusinessProviderService,
    loggingService: LoggingService
  ) {
    super(loggingService);
  }

  ProcessSequence(sequence: number): Observable<ServiceResponse> {
    return this.businessProvider.ProcessSequence(sequence);
  }

}
