export class Fruit{
    name: string
    color: string
    quantity: string

    constructor(name, color, quantity) {
        this.name=name;
        this.color=color;
        this.quantity=quantity;
    }

    mycart() {
        console.log("I have "+this.quantity+" "+this.color+" "+this.name+" in my cart")
    }
}