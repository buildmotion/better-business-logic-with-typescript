import { TacoTemplate } from './taco-template';

export class TacoBase extends TacoTemplate {

    constructor(customer: string) {
        super();
        this.customer = customer;
        this.quantity = 1;
    }

    selectTacoType() {
        // all tacos are made using soft corn torillas...default
        console.log(`Making a ${this.name} on a soft corn tortilla`);
    }

    deliverTaco() {
        console.log(`Delivered tacos x [${this.quantity}] to ${this.customer}.`);
    }
}