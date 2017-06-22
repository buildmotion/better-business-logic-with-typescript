

export class TacoTemplate {

    quantity: number;
    name: string;
    customer: string;

    execute() {
        this.retrieveIngredients();
        this.selectTacoType();
        this.addFilling();
        this.addToppings();
        this.deliverTaco();
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
        console.log(`Preparing to deliver ${this.quantity} taco${this.quantity > 1 ? 's' : ''}`);
    }
}