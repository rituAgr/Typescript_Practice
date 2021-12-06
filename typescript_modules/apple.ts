import {Fruit} from "./fruit";

export class Apple{

    fruit: Fruit = new Fruit("kiwi", "green", "20");
    constructor() {
        this.fruit.mycart()
    }
}

var apple = new Apple();