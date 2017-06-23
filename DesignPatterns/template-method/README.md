# Design Pattern: Template Method
This application provides a simple implementation of the ` Template Method ` design pattern. The application contains a set of specification tests that demonstrate the pattern. 

## Resources
Here are some links to more resources about this pattern.

* [https://sourcemaking.com/design_patterns/template_method](https://sourcemaking.com/design_patterns/template_method)
* [http://www.dofactory.com/net/template-method-design-pattern](http://www.dofactory.com/net/template-method-design-pattern)

Run the following command to execute the pattern:
```
ng test
```

## Template
The ` TacoTemplate ` class provides the template and the method ` execute() ` to create an amazing array of tacos. This class is meant to be an abstract base class for concrete implementations. 

```javascript
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
```

### Taco Template Implementation
A nice feature of this pattenr is that you can extend the ` template ` class in another base class and provide default or shared behaviors.

In this example, all tacos by default have the same ` Taco Type ` - due to the implementation of the ` selectTacoTacoType() ` method. All concrete tacos that extend this class will now share this behavior. 

```javascript
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
```

### Concrete Implementation :: Shrimp Taco
The following ` ShrimpTaco ` class demonstrates the customized implementation of the template methods of the ` TacoTemplate ` base class. 

```javascript

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
```
### Concrete Implementation :: Steak Taco
The following ` SteakTaco ` class demonstrates the customized implementation of the template methods of the ` TacoTemplate ` base class. 

```javascript
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
```

### End Result
You can view the output of the ` SteakTaco ` and the ` ShrimpTaco ` by running the specification tests. 

```
ng test
```

The following is the output from one of the concrete implementations of the ` Template Method `.
```
Retrieving ingredients for the taco...
Making a Carne Asada Taco on a soft corn tortilla
Adding tender grilled carne asada...
Adding shredded lettuce and pico de gallo...
Delivered tacos x [4] to Mateo.
```

![](result.PNG)