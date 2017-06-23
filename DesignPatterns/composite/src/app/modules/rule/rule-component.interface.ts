import {RuleResult} from './../modules/rule/index';

export interface IRuleComponent {
    execute(): RuleResult;
}