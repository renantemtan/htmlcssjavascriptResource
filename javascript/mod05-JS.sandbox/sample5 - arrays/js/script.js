

let movies = ["The Godfather", "Venom", "Mission Impossible", "The Nun", "Avengers"];

movies.forEach(function(x,y,z,a){
	console.log(x + " | " + y + " | " + z + " | " + a);
})



document.getElementsByTagName('button')[0].addEventListener('click', function(){
	let listcheck = document.querySelectorAll('.todo li');
	console.log(listcheck.length);
	let newtodo = document.getElementById('input').value;
	let print = "yes";

	for (let counter=0; counter < listcheck.length; counter++){
		if (listcheck[counter].innerText == newtodo){
			// console.log(listcheck[counter].innerText == newtodo);
			console.log(listcheck[counter].innerText);
			console.log("true " + counter);
			print = "no";
			break;
		} else {
			// console.log(listcheck[counter].innerText === newtodo);
			console.log(listcheck[counter].innerText);
			console.log("false " + counter);
			if (print == "no") {print = "no"} else {print = "yes"};
		}
		console.log(print);
	}

	if (print=='yes') {
		document.querySelector('.todo').innerHTML += "<li>"+newtodo+"</li>";
	} else {
		console.log(print);
		alert("Item already on the list!")
	}

})






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



















