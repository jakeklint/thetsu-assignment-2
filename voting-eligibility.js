let age = 16;
let isCitizen = false;

// if (age >= 18 && isCitizen) {
//   console.log("Eligible to vote");
// } else if (age < 18 && isCitizen) {
//   console.log("Underage");
// } else if (age >= 18 && !isCitizen) {
//   console.log("Non-citizen");
// } else {
//   console.log("Not eligible to vote");
// }

switch (true) {
  case age < 18:
    console.log("Underage");

    break;
  case isCitizen === "false":
    console.log("Non-citizen");
    break;
  case age >= 18 && isCitizen === "true":
    console.log("Eligibale");
    break;

  default:
    console.log("Uneligible");

    break;
}
