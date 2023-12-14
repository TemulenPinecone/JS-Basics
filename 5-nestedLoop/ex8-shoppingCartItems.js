const shoppingCartItems = [
  { name: "Laptop", price: 1200, quantity: 1, category: "Electronics" },
  { name: "Backpack", price: 80, quantity: 2, category: "Fashion" },
  { name: "Smartphone", price: 800, quantity: 1, category: "Electronics" },
  { name: "Shoes", price: 50, quantity: 1, category: "Fashion" },
  { name: "Book", price: 15, quantity: 3, category: "Books" },
  { name: "Headphones", price: 100, quantity: 1, category: "Electronics" },
  { name: "T-shirt", price: 20, quantity: 5, category: "Fashion" },
  { name: "Tablet", price: 300, quantity: 2, category: "Electronics" },
  { name: "Jeans", price: 60, quantity: 2, category: "Fashion" },
  { name: "Notebook", price: 10, quantity: 4, category: "Books" },
  { name: "Camera", price: 500, quantity: 1, category: "Electronics" },
  { name: "Dress", price: 70, quantity: 1, category: "Fashion" },
  {
    name: "External Hard Drive",
    price: 80,
    quantity: 1,
    category: "Electronics",
  },
  { name: "Sweater", price: 40, quantity: 3, category: "Fashion" },
  { name: "Fitness Tracker", price: 60, quantity: 1, category: "Electronics" },
  { name: "Sunglasses", price: 25, quantity: 2, category: "Fashion" },
  { name: "Cookbook", price: 18, quantity: 2, category: "Books" },
  { name: "Gaming Console", price: 300, quantity: 1, category: "Electronics" },
  { name: "Running Shoes", price: 55, quantity: 1, category: "Fashion" },
  { name: "Desk Chair", price: 120, quantity: 1, category: "Furniture" },
];

// #1 : task write a function calculateCategoryCosts return a object of {name: name, totalcost:???}

// function findTotalCost(dat) {
//   let result = dat.map((a) => {
//     return { Name: a.name, TotalCost: a.price * a.quantity };
//   });
//   return result;
// }
// console.log(findTotalCost(shoppingCartItems));

// #2 : Calculate discount price by 10% {name, price, quantity, totalCost}

// function Discount10(dat) {
//   let result = dat.map((a) => {
//     return {
//       Name: a.name,
//       discountedPrice: a.price * 0.9,
//       quantity: a.quantity,
//       totalPrice: a.price * 0.9 * a.quantity,
//     };
//   });
//   return result;
// }
// console.log(Discount10(shoppingCartItems));

// #3 : Discounttai product uud deer 2 oos deesh quantity tai product uudiig gargaj ir

// function Discount10Quantity2(dat) {
//   let result = dat
//     .filter((a) => a.quantity >= 2)
//     .map((b) => {
//       return {
//         name: b.name,
//         discountedPrice: b.price * 0.9,
//         quantity: b.quantity,
//         category: b.category,
//       };
//     });
//   return result;
// }
// console.log(Discount10Quantity2(shoppingCartItems));

// #4 : dicounttai product uudiin bvh price iin dundajiig olood dundajaas
// ih bolon baga productuudiig gargaj ir

function Discount10Average(dat, compareAverage) {
  let sumPrice = 0;
  let priceAverage = 1;
  dat.map((a) => (sumPrice = sumPrice + a.price * 0.9));
  priceAverage = sumPrice / dat.length;
  //   console.log(`first sumPrice`, sumPrice);
  //   console.log(`priceAverage`, priceAverage);
  let result = dat.filter(
    (b) => b.price <= priceAverage,
    dat.map((c) => {
      return c.dat;
    })
  );
  return result;
}

console.log(Discount10Average(shoppingCartItems, `averageLess`));
