const arr=[1,4,3,2,6,5,8,9];

// arr.filter((item)=>
// {
//     console.log(item)
// })
let result  = arr.filter((item)=>
{
    if(item=2){
        return item;
    }
})
console.log(result);