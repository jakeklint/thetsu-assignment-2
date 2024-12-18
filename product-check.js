let product_stock = 10;
let order = prompt("Order Quantity");

if (product_stock >= order) {
  document.write("<h2>Sufficient Stock</h2>");
} else {
  document.write("<h2>Insufficient Stock</h2>");
}

// switch (true) {
//   case product_stock >= order:
//     console.log("sufficient");

//     break;

//   default:
//     console.log("insufficient");

//     break;
// }

// let num = prompt("Enter number");
// document.write("<h2>Multiplication Table of " + num + "</h2>");
// for (let i = 1; i <= 12; i++) {
//   document.write("<p>" + num + " * " + i + " = " + num * i + "</p>");
// }
