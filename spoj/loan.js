// salary ni 2 sayaas ih
// N.Daatgal toldog baih
// passport eswel identity cardtai baih
// person baih eswel itgemjleleer baih
// dept ni 1 sayas baga bwal zeel garna

let loan = {
  name: "John",
  salary: 3000000,
  socialInsurance: true,
  passport: true,
  identityCard: false,
  dept: 700000,
  credentials: true,
  own: false,
};

if (
  loan.salary > 2000000 &&
  loan.socialInsurance > 0 &&
  (loan.passport || loan.identityCard) &&
  loan.dept < 1000000 &&
  (loan.credentials || loan.own)
) {
  console.log("Dear " + loan.name + " : Loan is possible");
} else console.log("Loan is not possible");

// if ( 1 && 1 &&  0 || 1 && 1)
// if ( 1 * 1 * ( 0 + 1 ) * 1)
