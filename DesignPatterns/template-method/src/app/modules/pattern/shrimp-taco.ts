
import { TacoBase } from './taco-base';

export class ShrimpTaco extends TacoBase {

    constructor(customer: string, quantity: number = 1) {
        super(customer);
        this.taco.Quantity = quantity;
        this.name = 'Denver Shrimp Taco';
    }

    addFilling() {
        const fillingInformation = `Adding grilled spicy shrimp...`;
        this.taco.Filling = fillingInformation;
        console.log(fillingInformation);
    }

    addToppings() {
        const toppingInformation = `Adding shredded cabbage and tomatillo salsa...`;
        this.taco.Toppings = toppingInformation;
        console.log(toppingInformation);
    }
}