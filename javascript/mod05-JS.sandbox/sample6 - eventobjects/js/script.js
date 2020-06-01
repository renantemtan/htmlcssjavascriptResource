function getContent(x){
	// let num = x.target.innerHTML;
	let num = this.innerHTML;
	if (num == "1") {
		x.target.innerHTML = "uno";
	} else if (num == "2") {
		x.target.innerHTML = "dos";
	} else if (num == "3") {
		x.target.innerHTML = "tres";
	}	
	console.log(x.target.innerHTML)	
};

let btn1 = document.querySelector("#one");
let btn2 = document.querySelector("#two");
let btn3 = document.querySelector("#three");

btn1.addEventListener('click', getContent);
btn2.addEventListener('click', getContent);
btn3.addEventListener('click', getContent);

/*---------------------------*/

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let percent = document.querySelector("#percent");

plus.addEventListener('click', compute);
minus.addEventListener('click', compute);
multiply.addEventListener('click', compute);
divide.addEventListener('click', compute);
percent.addEventListener('click', compute);

function compute(x){
	// let func = x.target.innerHTML;
	let func = this.innerHTML;
	let num1 = parseFloat(document.getElementById('num1').value);
	let num2 = parseFloat(document.getElementById('num2').value);

	if (func == "+") {
		document.querySelector('#answer').innerHTML = num1 + num2;
	} else if (func == "-") {
		document.querySelector('#answer').innerHTML = num1 - num2;
	} else if (func == "*") {
		document.querySelector('#answer').innerHTML = num1 * num2;
	} else if (func == "/") {
		document.querySelector('#answer').innerHTML = num1 / num2;
	} else if (func == "%") {
		document.querySelector('#answer').innerHTML = num1 % num2;
	}
}

















// let movies = ["The Godfather", "Venom", "Mission Impossible", "The Nun", "Avengers"];

// movies.forEach(function(x,y,z,a){
// 	console.log(x + " | " + y + " | " + z + " | " + a);
// })



// document.getElementsByTagName('button')[0].addEventListener('click', function(){
// 	let listcheck = document.querySelectorAll('.todo li');
// 	console.log(listcheck.length);
// 	let newtodo = document.getElementById('input').value;
// 	let print = "yes";

// 	for (let counter=0; counter < listcheck.length; counter++){
// 		if (listcheck[counter].innerText == newtodo){
// 			// console.log(listcheck[counter].innerText == newtodo);
// 			console.log(listcheck[counter].innerText);
// 			console.log("true " + counter);
// 			print = "no";
// 			break;
// 		} else {
// 			// console.log(listcheck[counter].innerText === newtodo);
// 			console.log(listcheck[counter].innerText);
// 			console.log("false " + counter);
// 			if (print == "no") {print = "no"} else {print = "yes"};
// 		}
// 		console.log(print);
// 	}

// 	if (print=='yes') {
// 		document.querySelector('.todo').innerHTML += "<li>"+newtodo+"</li>";
// 	} else {
// 		console.log(print);
// 		alert("Item already on the list!")
// 	}

// })






// let count = 300;
// while (count < 333 ) {
// 	if(count % 2 !== 0) {
// 		console.log("counter: " + count);		
// 	}
// 	count+=1;
// }

// let i = 0;
// do {
// 	console.log(i);
// 	i++;
// }
// while (i<10);

// for(let counter = 100; counter < 106; counter++) {
// 	console.log(counter);
// }

// let list = document.getElementsByTagName('li');

// for(let counter = 0; counter < 5; counter++) {
// 	superhero = list[counter].innerHTML;
// 	// console.log(list[counter].innerHTML);
// 	if (superhero == "Hulk") {
// 		console.log("Hulk is on!");
// 		// console.log("loop: "+counter)
// 		// break;
// 	} else {
// 		console.log("Not the green man");
// 	}
// 	console.log("loop: "+counter);
// }

// 	console.log("==============");

// let dclist = document.createElement('li');
// dclist.innerHTML = "Superman";
// document.querySelectorAll('ul')[0].appendChild(dclist);

// document.querySelectorAll('ul')[0].innerHTML += "<li>Batman</li>"; 



















