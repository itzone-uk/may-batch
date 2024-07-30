// Adding 1 to screen
let one = document.getElementById('one_btn');
one.addEventListener("click", function () {
  console.log("first")
  let data = document.getElementById("screen").innerHTML
  document.getElementById("screen").innerHTML = data + "1";
});

// Adding 2 to screen
let two = document.getElementById('two_btn');
two.addEventListener("click", function () {
  console.log("second")
  let data = document.getElementById("screen").innerHTML
  document.getElementById("screen").innerHTML = data + "2"
});

// For Clearing Screen
const clear = document.getElementById("c_btn");
clear.addEventListener("click", function () {
  console.log("Clear")
  document.getElementById("screen").innerHTML = "";
});
