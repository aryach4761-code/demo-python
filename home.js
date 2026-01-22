const products = [
  { id: 1, name: "Laptop", price: 400 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Headphones", price: 30 },
];

const expensiveProducts = products.filter((product) => product.price > 500);

console.log(expensiveProducts);
// Output: [{ id: 2, name: 'Phone', price: 600 }]
