
import { RuleComposite } from './../pattern/index';
import { Thing } from './../rule/index';
import { RuleResult } from './../rule/index';
import * as rules from './../../rules/index';

export class ThingIsValid extends RuleComposite {
    target: Thing;;

    constructor(name: string, message: string, target: Thing, isDisplayable: boolean = true) {
        super(name, message, isDisplayable);
        this.target = target;
        this.isValid = true;
        this.configureRules();
    }

    /**
     * A helper method to configure/add rules to the validation context. 
     */
    configureRules() {
        this.rules.push(new rules.IsNotNullOrUndefined('StringIsNotNull', 'The target is null or undefined.', this.target));
        if (this.target != null) {
            this.rules.push(new rules.IsTrue(`IsInUse`, `The thing is no longer in use.`, this.target.isInUse, true));
            this.rules.push(new rules.IsNotNullOrUndefined(`NameIsValid`, `The name of the thing is not valid.`, this.target.name, true));
            this.rules.push(new rules.IsNotNullOrUndefined(`DescriptionIsValid`, `The description of the thing is not valid.`, this.target.description, true));
            this.rules.push(new rules.IsTrue(`AgeIsValid`, `Should not have things older than 10 years.`, this.target.age < 10, true));
        }
    }
}