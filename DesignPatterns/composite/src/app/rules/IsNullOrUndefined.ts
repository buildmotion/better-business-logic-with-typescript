import {RuleLeaf} from './../modules/pattern/index';
import {RuleResult} from './../modules/rule/index';

export class IsNullOrUndefined extends RuleLeaf {
    target;

    constructor(name: string, message: string, target: any, isDisplayable: boolean = false) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    render() {
        if (this.target == null || typeof this.target === undefined || typeof this.target === "undefined") {
            this.isValid = true;
        }
        return new RuleResult(this, this.target);
    }
}
