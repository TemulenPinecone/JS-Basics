let sportsman = [
  {
    name: "James",
    age: 20,
    scores: [10, 20, 30, 40],
  },
  {
    name: "John",
    age: 23,
    scores: [30, 20, 50, 40],
  },
  {
    name: "David",
    age: 30,
    scores: [50, 20, 30, 40],
  },
  {
    name: "Joseph",
    age: 33,
    scores: [50, 50, 30, 40],
  },
  {
    name: "Carl",
    age: 19,
    scores: [50, 20, 30, 40],
  },
  {
    name: "Terry",
    age: 25,
    scores: [50, 20, 50, 40],
  },
  {
    name: "Eddie",
    age: 30,
    scores: [25, 20, 40, 40],
  },
  {
    name: "Codie",
    age: 28,
    scores: [20, 45, 30, 40],
  },
  {
    name: "Wane",
    age: 29,
    scores: [40, 50, 30, 20],
  },
  {
    name: "Jeremy",
    age: 40,
    scores: [30, 20, 30, 40],
  },
];

// 1. FIRST SPORTSMAN SCORES AVERAGE

function Average(x) {
  let scoreSum = 0;
  scoreSum =
    (sportsman[0].scores[0] +
      sportsman[0].scores[1] +
      sportsman[0].scores[2] +
      sportsman[0].scores[3]) /
    4;
  console.log(scoreSum);
}
Average();

// 2. SECOND SPORTSMAN SCORES AVERAGE
let sportsman = [
  {
    name: "James",
    age: 20,
    scores: [10, 20, 30, 40],
  },
  {
    name: "John",
    age: 23,
    scores: [30, 20, 50, 40],
  },
  {
    name: "David",
    age: 30,
    scores: [50, 20, 30, 40],
  },
  {
    name: "Joseph",
    age: 33,
    scores: [50, 50, 30, 40],
  },
  {
    name: "Carl",
    age: 19,
    scores: [50, 20, 30, 40],
  },
  {
    name: "Terry",
    age: 25,
    scores: [50, 20, 50, 40],
  },
  {
    name: "Eddie",
    age: 30,
    scores: [25, 20, 40, 40],
  },
  {
    name: "Codie",
    age: 28,
    scores: [20, 45, 30, 40],
  },
  {
    name: "Wane",
    age: 29,
    scores: [40, 50, 30, 20],
  },
  {
    name: "Jeremy",
    age: 40,
    scores: [30, 20, 30, 40],
  },
];
function Average(x) {
  let scoreSum = 0;
  scoreSum =
    (sportsman[1].scores[0] +
      sportsman[1].scores[1] +
      sportsman[1].scores[2] +
      sportsman[1].scores[3]) /
    4;
  console.log(scoreSum);
}
Average();



// 3. YOUNG SPORTSMAN
let sportsman = [
  {
    name: "James",
    age: 20,
    scores: [10, 20, 30, 40],
  },
  {
    name: "John",
    age: 23,
    scores: [30, 20, 50, 40],
  },
  {
    name: "David",
    age: 30,
    scores: [50, 20, 30, 40],
  },
  {
    name: "Joseph",
    age: 33,
    scores: [50, 50, 30, 40],
  },
  {
    name: "Carl",
    age: 19,
    scores: [50, 20, 30, 40],
  },
  {
    name: "Terry",
    age: 25,
    scores: [50, 20, 50, 40],
  },
  {
    name: "Eddie",
    age: 30,
    scores: [25, 20, 40, 40],
  },
  {
    name: "Codie",
    age: 28,
    scores: [20, 45, 30, 40],
  },
  {
    name: "Wane",
    age: 29,
    scores: [40, 50, 30, 20],
  },
  {
    name: "Jeremy",
    age: 40,
    scores: [30, 20, 30, 40],
  },
];
function youngest(x) {
  let ageYoung = sportsman[0].age;
  for (let i = 1; i < 10; i++) {
    if (sportsman[0].age > sportsman[i].age) {
      ageYoung = sportsman[i].age;
    }
  }
  console.log(ageYoung);
}
youngest();

// 4. FUNCTION + LOOP => ALL SPORTSMAN SCORE AVERAGE
let sportsman = [
  {
    name: "James",
    age: 20,
    scores: [10, 20, 30, 40],
  },
  {
    name: "John",
    age: 23,
    scores: [30, 20, 50, 40],
  },
  {
    name: "David",
    age: 30,
    scores: [50, 20, 30, 40],
  },
  {
    name: "Joseph",
    age: 33,
    scores: [50, 50, 30, 40],
  },
  {
    name: "Carl",
    age: 19,
    scores: [50, 20, 30, 40],
  },
  {
    name: "Terry",
    age: 25,
    scores: [50, 20, 50, 40],
  },
  {
    name: "Eddie",
    age: 30,
    scores: [25, 20, 40, 40],
  },
  {
    name: "Codie",
    age: 28,
    scores: [20, 45, 30, 40],
  },
  {
    name: "Wane",
    age: 29,
    scores: [40, 50, 30, 20],
  },
  {
    name: "Jeremy",
    age: 40,
    scores: [30, 20, 30, 40],
  },
];
function Average(x) {
    let scoreSum = 0;
 for (let i=1; i<10; i++) {
     scoreSum =
       (sportsman[i].scores[0] +
         sportsman[i].scores[1] +
         sportsman[i].scores[2] +
         sportsman[i].scores[3]) /
       4;
     console.log(scoreSum);
 }
}
Average();