
import { TacoBase } from './taco-base';

export class ShrimpTaco extends TacoBase {

    constructor(customer: string, quantity: number = 1) {
        super(customer);
        this.quantity = quantity;
        this.name = 'Denver Shrimp Taco';
    }

    addFilling() {
        console.log(`Adding grilled spicy shrimp...`);
    }

    addToppings() {
        console.log(`Adding shredded cabbage and tomatillo salsa...`);
    }
}