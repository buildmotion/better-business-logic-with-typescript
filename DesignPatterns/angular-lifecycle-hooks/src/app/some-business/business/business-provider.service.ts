import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProcessSequenceAction } from './actions/process-sequence.action';
import { ServiceBase, ServiceResponse } from '@buildmotion/foundation';
import { LoggingService } from '@buildmotion/logging';
import { SomeHttpService } from './some-http.service';

@Injectable()
export class BusinessProviderService extends ServiceBase {

  constructor(
    loggingService: LoggingService,
    public httpService: SomeHttpService
  ) {
    super(loggingService);
  }

  /**
   * Use to process the specified sequence value.
   * @param sequence a number representing the current sequence to process.
   */
  ProcessSequence(sequence: number): Observable<ServiceResponse> {
    const action = new ProcessSequenceAction(sequence);
    action.Do(this);
    return action.response;
  }

}
