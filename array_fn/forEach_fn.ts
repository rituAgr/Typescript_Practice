// https://www.geeksforgeeks.org/typescript-array-foreach-method/
class forEach_fn
{
    public forEach_withArray(arr: Array<any>){
        arr.forEach(function (ele){
            console.log(ele)
        })
    }
    public forEach_withArray2(arr: Array<any>){
        arr.forEach((ele)=>{
            console.log(ele)
        })
    }
}

let obj = new forEach_fn();
obj.forEach_withArray(["jshaj", "jdashd", 1, 3, null, undefined])
obj.forEach_withArray2(["jshaj", "jdashd", 1, 3, null, undefined])

