import { Injectable } from '@angular/core';

import { ValidationContext } from './../../validation/index';
import { Thing } from './thing.model';
import * as rules from './index';

@Injectable()
export class RuleService {

  validationContext: ValidationContext = new ValidationContext();

  constructor() { }

  simpleValidation(thing: Thing): ValidationContext {
    this.validationContext.addRule(new rules.ThingIsInUseRule(`ThingIsValid`, `The thing is not valid.`, thing.isInUse, true));
    this.validationContext.renderRules();
    return this.validationContext;
  }

  fullValidation(thing: Thing): ValidationContext {
    this.validationContext.addRule(new rules.ThingIsValid(`ThingIsValid`, `The thing is not valid.`, thing, true));
    this.validationContext.renderRules();
    return this.validationContext;
  }

  writeValidationErrors() {
    if(this.validationContext.hasRuleViolations()) {
      this.validationContext.results.filter(f => !f.isValid).forEach(e => {
        console.log(`${e.rule.name}: ${e.message}`);
      })
    }
  }
}
