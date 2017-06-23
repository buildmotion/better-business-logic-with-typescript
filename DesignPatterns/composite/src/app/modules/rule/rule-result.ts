import { RuleComponent } from './../pattern/index';
import { RuleComposite } from './../pattern/index';

export class RuleResult {
    isValid: boolean;
    rule: RuleComponent;
    message: string;
    target: any;

    constructor(rule: RuleComponent, target: any);
    constructor(rule: RuleComposite);
    constructor(rule: RuleComponent, target?: any) {
        if (rule != null) {
            this.rule = rule;
            this.isValid = rule.isValid;
            this.message = rule.message;
        }
        this.target = target;
    }
}