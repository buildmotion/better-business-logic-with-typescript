import { TacoTemplate } from './taco-template';

export class TacoBase extends TacoTemplate {

    constructor(customer: string) {
        super();
        this.customer = customer;
        this.taco.Quantity = 1;
    }

    selectTacoType() {
        // all tacos are made using soft corn torillas...default
        const tacoTypeInformation = `Making a ${this.name} on a soft corn tortilla`;
        this.taco.TacoType = tacoTypeInformation;
        console.log(tacoTypeInformation);
    }

    deliverTaco() {
        const deliveryInformation = `Delivered tacos x [${this.taco.Quantity}] to ${this.customer}.`;
        this.taco.DeliveryInfo = deliveryInformation;
        console.log(deliveryInformation);
    }
}