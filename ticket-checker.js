let speed_limit = 60;
let vehicle_speed = prompt("Max Speed");

if (speed_limit >= vehicle_speed) {
  document.write("<h2>Non-speeding Vehicle</h2>");
} else {
  document.write("<h2>Speeding Vehicle > A speeding ticket</h2>");
}
