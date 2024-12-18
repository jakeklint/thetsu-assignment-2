let credit_score = 700;
let annual_income = 60000;

// if (credit_score >= 700 && annual_income < 40000) {
//   console.log("Sufficient credit score");
// } else if (annual_income >= 40000 && credit_score < 700) {
//   console.log("Sufficient income");
// } else if (credit_score >= 700 && annual_income >= 40000) {
//   console.log("You are eligible for the loan");
// } else {
//   console.log("YOur are not eligible for the loan");
// }

switch (true) {
  case credit_score < 700 && annual_income >= 40000:
    console.log("Sufficient income");

    break;
  case credit_score >= 700 && annual_income < 40000:
    console.log("Sufficient score");
    break;
  case credit_score >= 700 && annual_income >= 40000:
    console.log("You can get the loan");
    break;

  default:
    console.log("You can not get the loan");

    break;
}
