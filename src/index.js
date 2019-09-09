document.getElementById("app").innerHTML = `
<h1>Hello Parcel! ss</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// Anaon, not named
// Not hoisted
// Passed around or used
const sayHi = function sayHi() {
  return console.log("hi");
};

const sayHi2 = () => console.log("hello");

sayHi2();
