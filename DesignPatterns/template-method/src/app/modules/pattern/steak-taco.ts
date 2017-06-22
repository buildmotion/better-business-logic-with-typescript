
import { TacoBase } from './taco-base';

export class SteakTaco extends TacoBase {

    constructor(customer: string, quantity: number = 1) {
        super(customer);
        this.quantity = quantity;
        this.name = 'Carne Asada Taco';
    }

    addFilling() {
        console.log(`Adding tender grilled carne asada...`);
    }

    addToppings() {
        console.log(`Adding shredded lettuce and pico de gallo...`);
    }
}