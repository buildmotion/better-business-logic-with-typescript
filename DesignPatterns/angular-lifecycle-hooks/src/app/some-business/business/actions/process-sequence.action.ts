import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { ActionResult } from 'angular-actions';

import { Severity } from '@buildmotion/logging';
import { SomeActionBase } from './some-action-base.action';
import { ServiceResponse } from '@buildmotion/foundation';

/**
 * Use this action to validate the user's credentials.
 */
export class ProcessSequenceAction extends SomeActionBase {

    // response: Observable<ServiceResponse>;

    constructor(private sequence: number) {
        super();
        this.actionName = 'ProcessSequenceAction ';
        console.log(`Running the [${this.actionName}] constructor.`);
    }

    /**
     * Override this method from the base [Action] class to allow for rules to be added to the
     * action's [ValidationContext]. Any rules added to the [ValidationContext] here will be executed when
     * the action's [ValidateAction] method is called - this method is just one of many pipeline methods
     * of the [Action] framework.
     */
    preValidateAction() {
        // add some rules to validate the action;
        console.log(`Running the [preValidateAction] for the ${this.actionName} action.`);
    }

    /**
     * Use this method to execute business logic - this method is allowed to execute only if the current action
     * does not contain any rule violations.
     */
    performAction() {
        console.log(`Running the [performAction] for the ${this.actionName}.`);
        this.response = this.businessProvider.httpService.ProcessSequence(this.sequence);
    }

    /**
     * All concrete actions must override and implement this method. It is defined in the [Action] framework class.
     */
    validateActionResult(): ActionResult {
        console.log('Running validateActionResult from action...now return an ActionResult');
        if (this.validationContext.hasRuleViolations()) {
            this.businessProvider.loggingService.log(this.actionName, Severity.Error, `The ${this.actionName} contains rule violations.`);
        }

        this.actionResult = this.serviceContext.isGood ? ActionResult.Success : ActionResult.Fail;
        return this.actionResult;
    }
}