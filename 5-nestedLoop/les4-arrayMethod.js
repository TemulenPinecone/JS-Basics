// String тоог number болгодог

let a = `123`;

let num = Number(a);


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

products.sort((prod1, prod2) => {
    return prod1.price - prod2.price;
})

console.log(products);


// map(); filter();

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

products.sort((prod1,prod2)=>{return1})

// sort - double for loop / тухайн хувьсагчид байгаа array-н утгыг өөрчилдөг
// map - single for loop / тухайн хувьсагч дотор байгаа array-н утгыг өөрчлөхгүйгээр буцааж байгаа утгыг нь аваад өгөгдсөн утгыг буцаана.

products.map();
products.filter();

// filter - boolean утга буцаадаг. үнэн гэсэн утгыг буцаасан утга бүрийг авч array үүсгэдэг.
// map - буцаасан утга болгоныг авч array үүсгэдэг

12/13
sort - 2 утга 
map - 
filter - 
ternary operator - 

// #filterBYBrand(``); filter method use 
// #filterByPrice(max,min); - sort use 
// #stockSort - r
// #price-uudiig tsugluulaad array uusge.

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

let onlyPrice = products.map((a) => )

let newNums = nums.map((a) => {
  if (a % 2 == 0) {
    return { name: "hosoo", age: 18 };
  }
});
console.log(newNums);
console.log(nums);