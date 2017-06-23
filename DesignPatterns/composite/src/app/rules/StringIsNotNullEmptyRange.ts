import dCompareResult = require('typescript-dotnet-commonjs/System/CompareResult');
import CompareResult = dCompareResult.CompareResult;
import dCompare = require('typescript-dotnet-commonjs/System/Compare');
import Compare = dCompare;

import { RuleComposite } from './../modules/pattern/index';
import { RuleResult } from './../modules/rule/index';
import { Primitive } from './index';
import { IsNotNullOrUndefined } from './index';
import { Range } from './index';

/**
 * Use this rule to validate a string target. A valid string is not null or undefined; and it
 * is within the specified minimum and maxiumum length. 
 */
export class StringIsNotNullEmptyRange extends RuleComposite {
    maxLength: number;
    minLength: number;
    target: Primitive;

    /**
     * The constructor for the [StringIsNotNullEmptyRangeRule].
     * @param name: The name of the rule.
     * @param message: The message to display when the rule is violated.
     * @param target: The target that the rule(s) will be evaluated against.
     * @param minLength: The minimum allowed length of the target value.
     * @param maxLength: The maximum allowed length of the target value.
     */
    constructor(name: string, message: string, target: Primitive, minLength: number, maxLength: number, isDisplayable: boolean = false) {
        super(name, message, isDisplayable);
        this.target = target;
        this.minLength = minLength;
        this.maxLength = maxLength;

        this.configureRules();
    }

    /**
     * A helper method to configure/add rules to the validation context. 
     */
    configureRules() {
        this.rules.push(new IsNotNullOrUndefined('StringIsNotNull', 'The string target is null or undefined.', this.target));
        if (this.target != null) {
            this.rules.push(new Range('TargetLengselfWithinRange', 'The string value is not within the specified range.', this.target.toString().length, this.minLength, this.maxLength));
        }
    }
}
