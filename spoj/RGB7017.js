function yearMonth(x) {
    let year = x/12 - x/12%1;
    let month = x%12;
    let result = year + " " + month;
    return result;
}

let resultView = yearMonth(30);
console.log(resultView);
