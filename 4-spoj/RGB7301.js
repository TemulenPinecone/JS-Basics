function firstDecimal(x) {
  let a = x;
  while (a >= 10) {
    // console.log(a);
    a = (a - (a % 10)) / 10;
  }
//   console.log(a);
  return a;
}

console.log(1034);
console.log(1034%10);
console.log((1034-1034%10));
console.log((1034-1034%10)/10);

console.log(firstDecimal(1034));

counta(x, a){

}

// 2тоо өгөдөнө. Эхний тоон дотор 2 дахь тоо хэдэн ш байгааг хэвлэ. 
// counta(1235511, 1) 
// return 2;


10-с их буюу тэнцүү бол ажиллана, 10-с бага бол зогсоно

let a = "2341";
console.log(a[0]);



