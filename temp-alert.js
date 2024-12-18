let current_temp = prompt("Enter Current Temperature");
let max_temp = 18;
let min_temp = 25;

// if (current_temp < min_temp) {
//   console.log("Low Temperature");
// } else if (current_temp > max_temp) {
//   console.log("High Temperature");
// } else {
//   console.log("Normal Temperature");
// }

switch (true) {
  case current_temp > max_temp:
    document.write("<h2>High temperature</h2>");

    break;
  case current_temp < min_temp:
    document.write("<h2>Low Temperature</h2>");
    break;

  default:
    document.write("<h2>Normal Temperature</h2>");

    break;
}
