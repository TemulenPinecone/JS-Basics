// function removeProd(x) {

//   let filteredProducts = products.filter((a) => {
//     return a.id !== x;
//   });
//   for (let i = 0; i < filteredProducts.length; i++) {
//     filteredProducts[i].id = i + 1;
//   }
//   return filteredProducts;
// }
// console.log(removeProd(2));

// function removeStock(prodName, stockNum) {
//   let mapStock = products.map((a) => {
//     a.name == prodName ? (a.stock = a.stock - stockNum) : null;
//     return a;
//   });
//   return mapStock;
// }
// console.log(removeStock(`iphone`, 3));
//

const products = [
  {
    id: 1,
    name: `mac`,
    price: 12,
    stock: 10,
  },
  {
    id: 2,
    name: `iphone`,
    price: 4,
    stock: 8,
  },
  {
    id: 3,
    name: `tv`,
    price: 14,
    stock: 5,
  },
  {
    id: 4,
    name: `speaker`,
    price: 5,
    stock: 3,
  },
];

// Variable-тай тэнцүү ID-тай OBJECT-г харуулахгүй байх
// function removeObject(x) {
//   let newProd = products.filter((a) => a.id !== x);
//   // Filter-дэж шинээр үүссэн Array-н ID-ний утгыг шинээр үүсгэх
//   for (let i = 0; i < newProd.length; i++) {
//     console.log({ i });
//     newProd[i].id = i + 1;
//     console.log({ newProd });
//     console.log(
//       `
//     `,
//       ` ----------`,
//       `
//     `
//     );
//   }
//   return newProd;
// }
// // console.log(removeObject(2));
// removeObject(2);

// function removeStock(soldProdName, soldStock) {
//   let afterSold = products.map((a) => {
//     a.name == soldProdName ? (a.stock = a.stock - soldStock) : null;
//     return a;
//   });
//   return afterSold;
// }

// console.log(removeStock(`iphone`, 1));

// 1. id:2-g hasah
// 2. seelProd(`iphone`,2); bugdend ni stock nemeh + iphone zaragdahad stock hasagdana
// map ashiglana
// 3. of removed then give new id - id-g ustgawal id-g ahiulah

function addKey(x) {
  let addedTitle = x.map((a) => {
    a.title = `Product name : ` + a.name + `Price : ` + a.price;
    return a;
  });
  return addedTitle;
}
console.log(addKey(products));
