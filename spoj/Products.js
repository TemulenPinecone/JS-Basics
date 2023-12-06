// 10 product
// array-d oruul
// function - all 10% sale
// filter function - only electron baraag olj gargaj irne

// get Electrons - utga awaad butsaana
// set Dicscount -

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

function findByExpensive() {
  let expensive = products[0].price;
  for (let i = 1; i < 10; i++) {
    if (expensive < products[i].price) {
      expensive = products[i].price;
    }
  }
  console.log(expensive);
}
findByExpensive();

// DISCOUNT

// function setSale(x) {
//   for (let i = 0; i < products.length; i = i + 1) {
//     products[i].price = products[i].price * (1 - x / 100);
//     console.log(products[i].price);
//   }
// }
// setSale(10);

// for (let i = 0; i < products.length; i = i + 1) {
//   let changedPrices = products[i].price * 0.9;
//   console.log(changedPrices);
// }

// FILTER
function findByBrand(find) {
  for (let i = 0; i < products.length; i = i + 1) {
    if (products[i].brand == find) {
      console.log(products[i]);
    }
  }
}
findByBrand("HP");

// Бүх бүтээгдэхүүн зөв эсэх?
for (let i = 0; i < 10; i = i + 1) {
  console.log(i, "=>", products[i]);
}

// for (let i = 0; i < products.length; i = i + 1) {
//   if (products[i].brand == "HP") {
//     let selectedBrand = products[i];
//     console.log(selectedBrand);
//   }
// }

// FILTER findAboveAvg

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

function findAboveAvg(prods) {
  let avgPrice = 0;
  let sumPrice = 0;
  for (let i=0; i<prods.length; i++) {
    sumPrice = sumPrice + prods[i].price;
  }
  console.log("sumPrice :",)
}

