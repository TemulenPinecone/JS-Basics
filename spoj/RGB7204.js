function nSum(x) {
    let result = 1;
    for (let i = 0; i <= x; i = i + 1) {
        result = result + i;
        console.log(result);
    }
}
nSum(5); 