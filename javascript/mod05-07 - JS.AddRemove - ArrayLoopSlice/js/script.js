let arrayList = new Array();

document.getElementById('removebtn').addEventListener('click', function(){
	let input = document.getElementById('input').value;
	let exist = "";
	
	for (let i = arrayList.length; i >= 0; i--) {
		console.log(arrayList.length);
		if (input == arrayList[i]) {
			exist = true;
			arrayList.splice(i,1);
			// i--;
			console.log(i+"whatsup");
		} 

	}

		
	if (exist == false) {
		alert(`"${input}" is not on the list.`)
	} else {
		document.querySelector('.ulcontent').innerHTML = "";
		arrayList.forEach(function(param){
			document.querySelector('.ulcontent').innerHTML += "<li>" + param + "</li>";				
			document.querySelector('#aLast').innerHTML = param;
		});

		let length = arrayList.length;
		document.querySelector('#aLength').innerHTML = length;
		if (arrayList.length == 0) {
			document.querySelector('#aFirst').innerHTML = "List is empty.";	
			document.querySelector('#aLast').innerHTML = "List is empty.";
		} else {
			document.querySelector('#aFirst').innerHTML = arrayList[0];			
		}
	}
	// console.log(arrayList);
})

document.getElementById('addbtn').addEventListener('click', function(){
	let input = document.getElementById('input').value;
	arrayList.push(input);
	document.querySelector('.ulcontent').innerHTML = "";

	arrayList.forEach(function(param){
		document.querySelector('.ulcontent').innerHTML += "<li>" + param + "</li>";
		document.querySelector('#aLast').innerHTML = param;
	});

	let length = arrayList.length;
	document.querySelector('#aLength').innerHTML = length;
	document.querySelector('#aFirst').innerHTML = arrayList[0];
	// console.log(arrayList);
	// document.getElementById('input').value = "";
})











/*-----Misc on Removings Items from Array-----------*/


// let movies = ["The Godfather", "Venom", "Mission Impossible", "The Nun", "Avengers"];

// movies.forEach(function(x,y,z,a){
// 	console.log(x + " | " + y + " | " + z + " | " + a);
// })

/*-----Set function to remove duplicates-----------*/
	// let uniqueArray = [...new Set(arrayList)];	
	// console.log(uniqueArray);

/*-----Array forEach function and splice-----------*/
	// arrayList.forEach(function(param, param2){
	// 	let i = param2;
	// 	if (param == input) {
	// 		arrayList.splice(i,1);
	// 		exist = true;
	// 		i++;
	// 	}	
	// })

/*-----Converting Arrays to String Technique-----------*/

	// arrayList.forEach(function(param, param2){
	// 	let convertedParam = param + "string";
	// 	let convertedInput = input + "string";
	// 	let i = param2;

	// 	let arrayX = arrayList.slice(param2,i);
	// 	let arrayY = arrayList.slice(i,i+=1);

	// 	let convertX = arrayX + "string";
	// 	let convertY = arrayY + "string";

	// 	// console.log(convertX,convertY);

	// 	if (param == input) {
	// 		arrayList.splice(i,1);
	// 		exist = true;
	// 		i--;	
	// 	}	
	// 	console.log(matchcount);
	// });	

	// if (matchcount != "") {
	// 	for (let ctr = 0; ; ctr++) {
	// 	}
	// 	console.log(arrayList);
	// }

	// let ctr = 0;
	// let ctr2 = 0;
	// do {
	// 	let currentArray = arrayList[ctr];
	// 	if (input == currentArray) {
	// 		arrayList.splice(ctr,1);
	// 		exist = true;		
	// 	}
	// 	ctr++;
	// } while (ctr <= arrayList.length); 
	// do {
	// 	let currentArray = arrayList[ctr2];
	// 	if (input == currentArray) {
	// 		arrayList.splice(ctr2,1);
	// 		exist = true;		
	// 	}
	// 	ctr2++;
	// } while (ctr2 <= arrayList.length); 

/*-----Removing Duplicates using Loop Function----------*/

	// function removeDuplicate(arrayList){
	// 	let unique = {};
	// 	arrayList.forEach(function(i){
	// 		if(!unique[i]){
	// 			console.log('shit');
	// 			unique[i] = true;
	// 		}
	// 	});
	// 	return Object.keys(unique);
	// }


	// document.querySelector('.ulcontent').innerHTML = arrayList;
	// console.log(arrayList);
	// let listcheck = document.querySelectorAll('.ulcontent li');
	// console.log(listcheck.length);
	// let newtodo = document.getElementById('input').value;
	// let print = "yes";

	// for (let counter=0; counter < listcheck.length; counter++){
	// 	if (listcheck[counter].innerText == newtodo){
	// 		// console.log(listcheck[counter].innerText == newtodo);
	// 		console.log(listcheck[counter].innerText);
	// 		console.log("true " + counter);
	// 		print = "no";
	// 		break;
	// 	} else {
	// 		// console.log(listcheck[counter].innerText === newtodo);
	// 		console.log(listcheck[counter].innerText);
	// 		console.log("false " + counter);
	// 		if (print == "no") {print = "no"} else {print = "yes"};
	// 	}
	// 	console.log(print);
	// }

	// if (print=='yes') {
	// 	document.querySelector('.ulcontent').innerHTML += "<li>"+newtodo+"</li>";
	// } else {
	// 	console.log(print);
	// 	alert("Item already on the list!")
	// }

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



















