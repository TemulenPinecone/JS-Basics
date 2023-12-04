function exponent(a,n) {
    let result = a;
    for (let i=1; i<n; i=i+1) {
        result=result*a;
    }
    console.log(result);
}

exponent(3,4);