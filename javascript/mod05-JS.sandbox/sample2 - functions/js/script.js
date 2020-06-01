// function rightTriangle(){
// 	console.log("*"); 
// 	console.log("**"); 
// 	console.log("***"); 
// 	console.log("****"); 
// 	console.log("*****"); 
// 	console.log("******"); 
// }

// function rightTriangleUserI(con,con2,con3,con4){
// 	console.log(con); 
// 	console.log(con+con2); 
// 	console.log(con+con2+con3); 
// 	console.log(con+con2+con3+con); 
// 	console.log(con+con2+con3+con+con2); 
// 	console.log(con+con2+con3+con+con2+con3); 
// }


// 0 to 11 goodmorning
// 12 to 18 goodafternoon
// 19 to 24 goodevening
// excess - invalid

function getInput(param1) {
	document.querySelector("h1").innerHTML = param1;
	console.log(param1);
}


document.getElementsByTagName("button")[0].addEventListener("click", function(){
	let textinput = document.getElementById("text1").value;
	getInput(textinput);
})	



function timeofday(par1){
	if (par1 <= 24 && par1 > 18) {
		console.log("goodevening!")	
		document.getElementsByTagName('div')[0].innerHTML = "good evening!";
	} else if (par1 <= 18 && par1 > 11) {
		console.log("goodafternoon!")	
		document.getElementsByTagName('div')[0].innerHTML = "good afternoon!";
	} else if (par1 <= 11 && par1 >= 0) {
		console.log("goodmorning!")	
		document.getElementsByTagName('div')[0].innerHTML = "good morning!";		
	} else {
		console.log("invalid number")
		document.getElementsByTagName('div')[0].innerHTML = "invalid number";
	}

}

document.getElementById("grtbtn").addEventListener("click", function(){
	let numvar = document.getElementsByTagName("input")[1].value;
	console.log(numvar);
	timeofday(numvar)
})



// let una = "^";
// rightTriangle();
// rightTriangleUserI("%",una,"~");




// // let x = 10;
// // if (x === 10) {
// // 	console.log("Equal to 10")
// // }


// let num = prompt("enter a number");

// if (num <= 17) {
// 	document.getElementById("p").innerHTML = "Too Young!";
// } else {
// 	document.getElementById("p").innerHTML = "Pwede!";
// }



// let color = document.getElementsByTagName('h1')[0].style.color = "black";

// alert(color);

// document.querySelector('h1').addEventListener("click", function(){
	
// 	if (color == "black") {
// 		color = "blue";
// 		document.getElementsByTagName('h1')[0].style.color = color;	
// 		document.getElementById("p").innerHTML = "The color of H1 was changed to "+color;
// 	} else if (color == "blue") {
// 		color = "black";
// 		document.getElementsByTagName('h1')[0].style.color = color;	
// 		document.getElementById("p").innerHTML = "The color of H1 was changed to "+color;
// 	} else {
// 		color = "red";
// 		document.getElementsByTagName('h1')[0].style.color = color;	
// 		document.getElementById("p").innerHTML = "The color of H1 was changed to "+color;
// 	}

// 	//Once a condition is met, all other conditions (i.e. else if) will no longer be executed.

// });

