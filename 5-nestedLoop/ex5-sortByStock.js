let products = [
  {
    name: "iphone14",
    price: 3000000,
    category: "electronic",
    brand: "Apple",
    stock: 200,
  },
  {
    name: "iphone15",
    price: 5000000,
    category: "electronic",
    brand: "Apple",
    stock: 100,
  },
  {
    name: "macbookPro",
    price: 5000000,
    category: "electronic",
    brand: "Apple",
    stock: 300,
  },
  {
    name: "iMac",
    price: 7000000,
    category: "electronic",
    brand: "Apple",
    stock: 200,
  },
  {
    name: "iCharger",
    price: 50000,
    category: "electronic",
    brand: "Apple",
    stock: 500,
  },
  {
    name: "samsungFold",
    price: 4000000,
    category: "electronic",
    brand: "Samsung",
    stock: 400,
  },
  {
    name: "hpSpectre",
    price: 5000000,
    category: "electronic",
    brand: "HP",
    stock: 200,
  },
  {
    name: "tablet",
    price: 3000000,
    category: "electronic",
    brand: "Samsung",
    stock: 200,
  },
  {
    name: "monitor34inch",
    price: 2000000,
    category: "electronic",
    brand: "Xiaomi",
    stock: 200,
  },
  {
    name: "miniPC",
    price: 4000000,
    category: "electronic",
    brand: "HP",
    stock: 200,
  },
];

products.sort((a, b) => {
  if (a.stock < b.stock) {
    return -1;
  } else {
    return 1;
  }
});

console.log(products);
