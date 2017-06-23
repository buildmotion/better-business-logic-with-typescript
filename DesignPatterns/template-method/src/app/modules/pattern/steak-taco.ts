
import { TacoBase } from './taco-base';

export class SteakTaco extends TacoBase {

    constructor(customer: string, quantity: number = 1) {
        super(customer);
        this.taco.Quantity = quantity;
        this.name = 'Carne Asada Taco';
    }

    addFilling() {
        const fillingInformation = `Adding tender grilled carne asada...`;
        this.taco.Filling = fillingInformation;
        console.log(fillingInformation);
    }

    addToppings() {
        const toppingInformation = `Adding shredded lettuce and pico de gallo...`;
        this.taco.Toppings = toppingInformation;
        console.log(toppingInformation);
    }
}