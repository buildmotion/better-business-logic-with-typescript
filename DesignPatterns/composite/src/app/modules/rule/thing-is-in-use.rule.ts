import { RuleLeaf } from './../pattern/index';
import { RuleResult } from './../rule/index';

export class ThingIsInUseRule extends RuleLeaf {
    target: boolean;

    constructor(name: string, message: string, target: boolean, isDisplayable: boolean = true) {
        super(name, message, isDisplayable);
        this.target = target;
    }

    render() {
        if (this.target) {
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
        return new RuleResult(this, this.target);
    }
}