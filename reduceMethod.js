const list = [
    {product:"mobile",price:10000},
    {product:"cover",price:500},
    {product:"charger",price:1000},
    {product:"laptop",price:45000},
    {product:"bag",price:1500},
    {product:"books",price:2000},
]
const total = list.reduce((totalPrize,currentPrize)=>{
    return totalPrize+ currentPrize.price
},0)
console.log(total)
