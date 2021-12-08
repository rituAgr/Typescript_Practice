// https://www.geeksforgeeks.org/typescript-array-map-method/
class map_fn{

    public map_array(arr: Array<string>){
        arr.map((val, index)=>console.log(`key=${index}   value=${val}`))
    }
}

let obj = new map_fn();
obj.map_array(["I", "am", "Ritu", "Agrawal"])