function exponent(x) {
    let result = 1;
    for (let i=1; i<=x; i=i+1) {
        result = result * 2;
    }
    console.log(result);
}

exponent(5);