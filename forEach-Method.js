const arr =[1,22,36,48,50,61]

function myfunc(number,index){

    console.log(`with forloop this is number ${number} and this is index ${index}`)
}
for(let i =0; i<arr.length; i++){
myfunc(arr[i],i)
}

console.log("------------LINE_BREAKER------------")

arr.forEach((number,index)=>{
console.log(`with forEach this is number ${number*2} and this is index ${index}`)
})
 
const user=[
    {name:"simran", age:"73" },
    {name:"manjot", age:"2753" },
    {name:"karan", age:"24563" },
    {name:"rk", age:"2546453" },
]
user.forEach(function(obj){
    console.log("yoyo",obj.name)
})