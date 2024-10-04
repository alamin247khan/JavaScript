const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 15000},
]
const names = products.map(product => product.name);
console.log(names);
const prices = products.map(p => p.price);
console.log(prices);
const total = products.reduce((acum, current) => acum + current.price , 0);
console.log(total);

class product{
    country = 'Bangladesh';
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}
const lenovo = new product()
console.log(lenovo);