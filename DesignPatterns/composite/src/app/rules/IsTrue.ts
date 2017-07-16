import {RuleLeaf} from './../modules/pattern/index';
import {RuleResult} from './../modules/rule/index';

export class IsTrue extends RuleLeaf {
    target: boolean;

    constructor(name: string, message: string, target: boolean, isDisplayable: boolean = true) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    render() {
        this.isValid = true;
        if (this.target === false) {//if(not true)-->false;
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
