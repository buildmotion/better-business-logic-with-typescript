import {RuleLeaf} from './../modules/pattern/index';
import {RuleResult} from './../modules/rule/index';

export class IsNotNullOrUndefined extends RuleLeaf {
    target;
    constructor(name: string, message: string, target: any, isDisplayable: boolean = false) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    /**
     * If the target is null or undefined, the result will be false.
     */
    render() {
        if (this.target == null || this.target === null || typeof this.target === "undefined") {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
