// @ts-ignore
import * as jsonStr from './example.json'
import {RootObject} from "./example";

class tsFunc{
    element: RootObject
    constructor(str: RootObject) {
        this.element = str
    }

    print(){
        console.log(this.element)
        console.log(this.element.glossary.GlossDiv.GlossList.GlossEntry)

    }
}

let o = new tsFunc(jsonStr)
o.print()