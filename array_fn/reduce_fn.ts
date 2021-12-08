// https://www.geeksforgeeks.org/typescript-array-reduce-method/
class reduce_fn {
    constructor() {
    }

    public reduceArray(arr: Array<string>): string {
        return arr.reduce(function (a, b) {
            return a.concat(b)
        })
    }
    public reduceArray2(arr: Array<string>): string {
        return arr.reduce((a,b)=> a.concat(b))
    }

    // The below way of using reduce callback fn doesnt work
    // public reduceArray2(arr: Array<string>): string {
    //     return arr.reduce(this.reduceUtils(a,b))
    //
    // }
    // private reduceUtils(a:string, b:string): string{
    //     return a.concat(b)
    // }
}
let obj = new reduce_fn()
console.log(obj.reduceArray(["My", "name", "is", "Ritu Agrawal"]))
console.log(obj.reduceArray2(["My", "name", "is", "Ritu Agrawal"]))