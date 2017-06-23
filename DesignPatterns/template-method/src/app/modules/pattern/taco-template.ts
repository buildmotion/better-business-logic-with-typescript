import { TacoModel } from './../taco/taco.model';

export class TacoTemplate {

    name: string;
    customer: string;
    taco: TacoModel = new TacoModel();

    execute(): TacoModel {
        this.retrieveIngredients();
        this.selectTacoType();
        this.addFilling();
        this.addToppings();
        this.deliverTaco();

        return this.taco;
    };

    retrieveIngredients() {
        console.log(`Retrieving ingredients for the taco...`);
    }

    selectTacoType() {
        console.log(`Preparing to select the taco type.`);
    }

    addFilling() {
        console.log(`Preparing to add taco filling.`);
    }

    addToppings() {
        console.log(`Preparing to add taco toppings.`);
    }

    deliverTaco() {
        console.log(`Preparing to deliver ${this.taco.Quantity} taco${this.taco.Quantity > 1 ? 's' : ''}`);
    }
}