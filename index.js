// Output: ...555

let fullstring;

// let text3 = fullstring.replace("Ahmad", 'Muhammad');

// console.log(text3);

function replaceit() {

  let para = document.getElementById('replaced');
  fullstring = para.innerHTML;

  para.innerHTML = fullstring.replaceAll("Ahmad", 'Muhammad');
  console.log(inputText.innerHTML)

  // let replaceText = document.getElementById("re").value;
  // let withText = document.getElementById("withText").value;
}