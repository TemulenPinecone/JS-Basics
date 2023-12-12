// COUNT BY A AND WORD
let sentence = `Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, 
adfadf`;
let countA = 0;
let countWord = 1;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == `a` || sentence[i] == `A`) {
    countA++;
  }
  if (sentence[i] == ` `) {
    countWord++;
  }
}
console.log(`\nA character : `, countA);
console.log(`\nWord count :`, countWord);

// COUNT BY WORD and CREATE THAT WORD IN ONE INDEX

let sentence2 = `Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, 
adfadf`;
let word = [];
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == ` `) {
    word[count] = sentence[i];
    count++;
  }
}

// s="bat dorj"
// if(s[i]=="") {
// array[count] = str;
// str="";
// count++;
// }
// else {
//   str=str+s[i];
// }

console.log(`Word `, word);

// 1,1-r ni haij ywj baigaad zai garch irwel umnuh index-uudaa hamgiin ehnii index deer nemeed
// hoyr dahi index-s zai baigaa index-g hurtel utgiig ni hooson bolgono.
