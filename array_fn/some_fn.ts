class Some_fn {
    public iseven(elements: Array<number>): boolean{
        return elements.some(function (element){
            return element%2===0
        })
    }
    public iseven2(elements: Array<number>): boolean{
        return elements.some((element)=>
            element%2===0
        )
    }
// The below way of using some callback fn doesnt work
    // public iseven2(elements: Array<number>): boolean{
    //     // @ts-ignore
    //     return elements.some(this.evenUtils(element))
    // }
    //
    // private evenUtils(element: number):boolean{
    //   return element%2===0
    // }
}

let obj = new Some_fn();
let arr = [ 11, 89, 23, 7, 98 ];
console.log(obj.iseven(arr))
console.log(arr)
console.log(obj.iseven2(arr))
// console.log(obj.iseven2(arr))