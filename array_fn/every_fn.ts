class every_fn{

    public testEvery(arr: Array<number| string>){
        let res = arr.every((element)=>{
            if(typeof element == "number")
                return  element%2===0
            return false
        })
        return res
    }
}

let obj = new every_fn()
console.log(obj.testEvery([10, 4 ,6, 6]))