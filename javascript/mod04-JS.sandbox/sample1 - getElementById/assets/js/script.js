// alert creats an alert box.
// alert("Hello!");

// This line prints the words: "Hello from the console."
console.log("Hello from console.");

let name = document.getElementById("mainHeading");

console.log(name.innerHTML);

name.innerHTML = "Tuitt Coding Boot Boot";

let heading = document.getElementById("mainHeading");

heading.style.color = "Red";
heading.style.background = "yellow";

heading.addEventListener('click', function(){
	console.log("You clicked!");
	heading.style.color = "green";
	heading.style.background = "lightblue";
}); 


