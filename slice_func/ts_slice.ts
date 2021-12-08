class ts_slice {

    str: string
    arr: Array<string>

    constructor(s: string, a: Array<string>) {
        this.str=s;
        this.arr=a
    }

    public sliceString(): string {
        return this.str.slice(0,3)
    }

    // @ts-ignore
    public sliceArr(): Array<string> {
        return this.arr.slice(1,2)
    }

    public set arraySetter(strArray: Array<string>){
        this.arr = strArray
    }
}

let obj = new ts_slice("Ritu Agrawal", ["My", "name", "is", "Ritu Agrawal"])
console.log(obj.sliceString())
console.log(obj.sliceArr())

obj.arraySetter = ["I", "am", "a", "software", "developer"]
console.log(obj.sliceArr())