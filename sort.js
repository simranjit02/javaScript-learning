const Products = [
    {product:"mobile",price:10000},
    {product:"cover",price:500},
    {product:"charger",price:1000},
    {product:"laptop",price:45000},
    {product:"bag",price:1500},
    {product:"books",price:2000},
]
const lowtoHigh =Products.sort((a,b)=>{
    return a.price-b.price
})
console.log(lowtoHigh)