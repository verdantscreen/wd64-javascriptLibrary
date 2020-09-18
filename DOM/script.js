let x = 10;
console.log(x);

//! 1: getElementById

console.log(document);
console.log(document.body);

document.getElementById("testParagraph").style.color = "purple";

let testPara = document.getElementById("testParagraph");

testPara.style.color = "red";
console.log(testPara); //tracking our code (this piece)
//console.dir(testPara); //chrome

//Will only get the first ID

//! 2: querySelectorAll & innerText/innerHTML

console.log(document.querySelectorAll("p.sampleClass"));
//querySelectorAll returns a NodeList
// nodes are items in HTML like elements and text

document.querySelectorAll("p.sampleClass")[2].innerText =
  "My Text has changed!";
//use bracket notation to select an index from the array; innerText is targeting an attribute within our tag that we can style

document.querySelectorAll("p.sampleClass")[2].id = "numThree";
console.log(document.querySelectorAll("p.sampleClass")[2]);
// bracket notation to access the array of elements.
// innerText allows us to reference or change the text inside that element
// ctrl alt down arrow

let changeAll = document.querySelectorAll("p.sampleClass");

changeAll.forEach((pTag) => {
  pTag.innerText = "My text has changed using a forEach() method.";
  //pTag.textContent = "My text has changed using a forEach() method.";
  //pTag.innerHTML = "My text has changed using a forEach() method.";
});

let showSpan = document.getElementById("spanTest");

console.log(showSpan.innerText);
console.log(showSpan.textContent);
console.log(showSpan.innerHTML);

/*
    - innerText simply references or allows us to change the text of a specified element. Will return only ~visible~ text in a 'node'.

    - textContent does the same thing that innerText does, but will return the ~FULL~ text in a 'node'.

    - innerHTML allows us to set the text as well as HTML elements, which will be nested inside of the current HTML element we're referencing.

*/

//! 3: addEventListener - click
/*let btn = document.getElementById("clickThis");

//let click = document.body.button#"clickThis";

console.log(btn);

btn.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "lightblue";
  event.target.innerText = "CLICKED!";
  console.log(btn);
});*/

/* CHALLENGE
    - Create a variable that holds the button element (may need to comment out the above code)
    - Using that variable, make the button toggle between red and blue when clicked.
*/

let btn = document.getElementById("clickThis");
/*
console.log(btn);

btn.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "lightblue";
});
btn.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
});*/

let red = true;
btn.addEventListener("click", (event) => {
  event.target.style.backgroundColor = red ? "blue" : "red";
  red = !red;
});

//! 4: keyup

let input = document.getElementById("nameInput");

input.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  //console.log(document.getElementsByTagName("p"));
  document.getElementsByTagName("p")[0].innerText = "Chchchange";

  if (e.target.value == "") {
    document.getElementsByTagName(
      "p"
    )[1].innerText = `Nothing has been typed...`;
  } else {
    document.getElementsByTagName(
      "p"
    )[1].innerText = `Everyone say hello to ${e.target.value}`;
  }
});
