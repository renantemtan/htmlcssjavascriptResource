// let x = 10;
// if (x === 10) {
// 	console.log("Equal to 10")
// }


let num = prompt("enter a number");

if (num <= 17) {
	document.getElementById("p").innerHTML = "Too Young!";
} else {
	document.getElementById("p").innerHTML = "Pwede!";
}



let color = document.getElementsByTagName('h1')[0].style.color = "black";

alert(color);

document.querySelector('h1').addEventListener("click", function(){
	
	if (color == "black") {
		color = "blue";
		document.getElementsByTagName('h1')[0].style.color = color;	
		document.getElementById("p").innerHTML = "The color of H1 was changed to "+color;
	} else if (color == "blue") {
		color = "black";
		document.getElementsByTagName('h1')[0].style.color = color;	
		document.getElementById("p").innerHTML = "The color of H1 was changed to "+color;
	} else {
		color = "red";
		document.getElementsByTagName('h1')[0].style.color = color;	
		document.getElementById("p").innerHTML = "The color of H1 was changed to "+color;
	}
	//Once a condition is met, all other conditions (i.e. else if) will no longer be executed.
	
});