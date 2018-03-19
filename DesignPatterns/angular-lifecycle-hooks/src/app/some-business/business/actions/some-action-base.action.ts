import { Action } from 'angular-actions';
import { ServiceMessage } from 'angular-rules-engine';
import { ServiceContext } from 'angular-rules-engine';
import { MessageType } from 'angular-rules-engine';
import { ActionResult } from 'angular-actions';

import { LoggingService } from '@buildmotion/logging';
import { Severity } from '@buildmotion/logging';
import { ActionBase } from '@buildmotion/foundation';
import { BusinessProviderService } from '../business-provider.service';

export class SomeActionBase extends ActionBase {

    businessProvider: BusinessProviderService;
    loggingService: LoggingService;

    constructor() {
        super();
    }

     /**
     * Use the [Do] method to perform the action.
     */
    Do(businessProvider: BusinessProviderService) {
        this.businessProvider = businessProvider;
        this.serviceContext = businessProvider.serviceContext;
        this.loggingService = businessProvider.loggingService;

        this.execute();
    }
}