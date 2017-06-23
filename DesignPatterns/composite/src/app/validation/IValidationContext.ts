import {ValidationContextState} from './index';
import {RuleResult} from '../rules/index';
import {RulePolicy} from '../rules/index';

/**
 * Use this interface class to define the structure of a Validation Context.
 */
export interface IValidationContext {
	state: ValidationContextState;
	results: Array<RuleResult>;
	rules: RulePolicy[];
	hasRuleViolations(): boolean;
	renderRules(): IValidationContext;
	isValid: boolean;
}