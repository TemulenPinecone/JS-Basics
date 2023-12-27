const bookData = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    rating: 4.5,
    price: 15.99,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: 4.8,
    price: 19.99,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    rating: 4.7,
    price: 24.99,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.6,
    price: 12.99,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4.9,
    price: 18.99,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    rating: 4.3,
    price: 14.99,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    rating: 4.2,
    price: 16.99,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fantasy",
    rating: 4.8,
    price: 20.99,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.7,
    price: 17.99,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    rating: 4.9,
    price: 22.99,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4.9,
    price: 29.99,
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Mystery",
    rating: 4.4,
    price: 21.99,
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Dystopian",
    rating: 4.5,
    price: 14.99,
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    rating: 4.6,
    price: 18.99,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    rating: 4.7,
    price: 20.99,
  },
  {
    title: "The Odyssey",
    author: "Homer",
    genre: "Classics",
    rating: 4.5,
    price: 15.99,
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-Apocalyptic",
    rating: 4.2,
    price: 16.99,
  },
  {
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    genre: "Historical Fiction",
    rating: 4.8,
    price: 23.99,
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science Fiction",
    rating: 4.6,
    price: 19.99,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    rating: 4.4,
    price: 17.99,
  },
];

// #1 - find Expensive book more than 12

// function expensiveMoreThan(comparePrice) {
//   let filteredPrice = bookData.filter((b) => {
//     return b.price < comparePrice;
//   });
//   return filteredPrice;
// }

// console.log(expensiveMoreThan(15));

// #1 : find Expensive book more than 12

// function findExpensiveBook(inputPrice) {
// let filterExpensiveBook = bookData.filter((a) => a.price < inputPrice);
//   return filterExpensiveBook;
// }

// console.log(findExpensiveBook(15));

// #2 : find 12-18 priced range books

// function findPricedBook(inputLowPrice, inputHighPrice) {
//   let filterPricedBook = bookData.filter(
//     (a) => a.price > inputLowPrice && a.price < inputHighPrice
//   );
//   return filterPricedBook;
// }

// console.log(findPricedBook(12, 15));

// + push
// bookData.length =

// #3 : sort books by rating

// function sortByRate(inputData) {
//   inputData.sort((a, b) => {
//     if (a.rating < b.rating) {
//       return -1;
//     } else {
//       return 1;
//     }
//   }
//   );
//   return inputData;
// }

// console.log(sortByRate(bookData));

// function sortByRate(inputData) {
//   inputData.sort((a, b) => a.rating - b.rating);
//   return inputData;
// }
// console.log(sortByRate(bookData));

// #4 : find more than 20 length books

// function findTextLengthMoreThan(inputLength) {
//   let filteredTextLegth = bookData.filter((a) => a.title.length > inputLength);
//   return filteredTextLegth;
// }

// console.log(findTextLengthMoreThan(20));

// #5 - add summary on object by like this `A captivating book by ${book.author}.`

function addKeyOnObject(inputData) {
  let summaryAdded = inputData.map((a) => {
    a.summary = a.title + ` by ` + a.author;
    return a;
  });
  return summaryAdded;
}

console.log(addKeyOnObject(bookData));

// // #6 - Book title iin character length ni 10 aas ihiin awdag function bich, tedgeeriin price
// //      range iig ni oor function oor garga

// function findTextLength(10) {
//   let filteredTextLegth = bookData
//   .filter((a) => a.title.length > 10 && a.price
//   .filter)
// }

// function topPerformersReport(dat, perf) {
//   let topPerformers = dat
//     .filter((a) => a.performanceRating >= perf)
//     .map(({ name, performanceRating }) => ({ name, performanceRating }));
//   return topPerformers;
// }

// console.log(topPerformersReport(employees, 4.8));

// function findPricedBook(inputLowPrice, inputHighPrice) {
//   let filterPricedBook = bookData.filter(
//     (a) => a.price > inputLowPrice && a.price < inputHighPrice
// function findTextLengthPriceRange(charLength, lowPrice, highPrice) {
//   let filteredTextLegth = bookData.filter(
//     (a) =>
//       a.title.length > charLength && a.price > lowPrice && a.price < highPrice
//   );
//   return filteredTextLegth;
// }

// console.log(findTextLengthPriceRange(10, 12, 18));

// #7 - 12 oos ih vnetei nomnuudaas rating ni 4.7 oos deesh rating tei nomnuudiig oldog function bich

// function inequalityPriceAndRate(inputPrice, inputRate) {
//   let filteredPriceAndRate = bookData.filter(
//     (a) => a.price > inputPrice && a.rating > inputRate
//   );
//   return filteredPriceAndRate;
// }

// console.log(inequalityPriceAndRate(12, 4.7));
