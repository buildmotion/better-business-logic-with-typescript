

export class TacoModel {

    public TacoType: string; // hard shell, soft corn tortilla, etc? 
    public Filling: string; // steak, chicken, chorizo, shrimp
    public Toppings: string; // lettuce, cabbage, salsa, pico de gallo
    public DeliveryInfo: string; // plate/wrapped?
    public Quantity: number;

    toString() {
        return `${this.TacoType}
        ${this.Filling}
        ${this.Toppings}
        ${this.DeliveryInfo}`;
    }
}