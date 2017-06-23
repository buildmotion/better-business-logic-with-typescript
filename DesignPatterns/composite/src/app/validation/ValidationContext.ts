import { IValidationContext } from './index';
import { ValidationContextState } from './index';
import { RuleComponent } from './../modules/pattern/index';
import { RuleResult } from './../modules/rule/index';

/**
 * Use this class to create a new Validation Context for your application. With this
 * context, you can add rules and evaluate the rules.
 *
 * After the rules are evaluated, you can use the Validation Context to determine if there are
 * any rule violations.
 */
export class ValidationContext implements IValidationContext {
	state: ValidationContextState = ValidationContextState.NotEvaluated;
	results: Array<RuleResult> = new Array<RuleResult>();
	rules: Array<RuleComponent> = new Array<RuleComponent>();
	source: string;

	/**
	 * The constructor for the base validation context.
	 */
	constructor() {
		console.log('The [ValidationContext] is ready for action(s). All things are good until broken...');
	}

	/**
	 * Use this method to add a new rule to the ValidationContext. 
	 */
	addRule(rule: RuleComponent) {
		if (this.source) {
			rule.source = this.source;
		}
		this.rules.push(rule);
		return this;
	}

    /**
     * Use this extension method to set the [Source] for the current validation context.
     * @param source
     */
	withSource(source: string) {
		this.source = source;
		return this;
	}

    /**
     * Use this method to execute the rules added to the [ValidationContext].
     */
	renderRules() {
		this.results = new Array<RuleResult>();
		if (this.rules && this.rules.length < 1) {
			return this;
		}
		this.rules.sort(r => r.priority).forEach(r => this.results.push(r.execute()));
		return this;
	}

    /**
     * Use to determine if the validation context has any rule violations.
     */
	hasRuleViolations(): boolean {
		let hasViolations = false;
		if (this.rules) {
			const ruleViolationsCount = this.rules && this.rules.filter(r => r.isValid === false).length;
			if (ruleViolationsCount > 0) {
				hasViolations = true;
			}
		}
		return hasViolations;
	}

    /**
     * *Use to indicate if the validation context is valid - no rule violations.
     * @returns {}: returns a boolean.
     */
	get isValid(): boolean {
		var isRuleValid: boolean = true;
		if (this.rules) {
			var invalidRulesCount = this.rules.filter(r => r.isValid === false).length;
			if (invalidRulesCount > 0) {
				isRuleValid = false;
			}
		}
		return isRuleValid;
	}
}
