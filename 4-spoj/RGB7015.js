function dayHour(x) {
    let day = x/24 - x/24%1;
    let hour = x%24;
    let result = "Day:"+day + " Hour:"+hour;
    return result;
}

let lastResult = dayHour(54);
console.log(lastResult);