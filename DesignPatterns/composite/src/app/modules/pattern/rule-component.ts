
import {IRuleComponent} from './../rule/rule-component.interface';
import {RuleResult} from './../rule/rule-result';
import {RenderType} from './../../rules/render-type.enum';
import {Severity} from './../../rules/severity.enum';

/**
 * This is the base class for all rules. All rules will extend from this class. New rules
 * should extend [RuleLeaf] or [CompositeRule] - these rule abstractions extend [RulePolicy].
 */
export class RuleComponent {
    isValid: boolean = false;
    message: string;
    name: string;
    priority: number;
    result: RuleResult;
    isDisplayable: boolean;
    renderType: RenderType = RenderType.EvaluateAllRules;
    severity: Severity = Severity.Exception;
    source: string;

    constructor(name: string, message: string, isDisplayable: boolean);
    constructor(name: string, message: string, isDisplayable: boolean = false, severity: Severity = Severity.Exception, priority: number = 0) {
        this.name = name;
        this.message = message;
        this.isDisplayable = isDisplayable;
        this.priority = priority;
        this.severity = severity;
    }

    execute(): RuleResult {
        console.log('Begin execution of RulePolicy: ' + this.name);
        return this.render();
    }

    /**
     * Each rule must implement this function and return a valid [RuleResult].
     */
    render(): RuleResult {
        throw new Error('Each concrete rule must implement this function and return a valid Result.');
    }
}