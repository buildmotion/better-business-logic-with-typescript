import {RuleLeaf} from './../modules/pattern/index';
import {RuleResult} from './../modules/rule/index';

export class IsTrue extends RuleLeaf {
    target: boolean;

    constructor(name: string, message: string, target: boolean, isDisplayable: boolean = true) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    render() {
        this.isValid = false;
        if (this.target === true) {
            this.isValid = true;
        }
        return new RuleResult(this, this.target);
    }
}
