
import {RuleLeaf} from './../modules/pattern/index';
import {RuleResult} from './../modules/rule/index';

export class IsFalse extends RuleLeaf {
    target: boolean;

    constructor(name: string, message: string, target: boolean, isDisplayable: boolean = false) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    render() {
        if (this.target) {//if(true)-->false;
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}
