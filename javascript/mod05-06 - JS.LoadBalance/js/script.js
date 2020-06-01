let initload = document.getElementsByTagName('span')[0].innerHTML;


document.getElementById('10').addEventListener('click', function(){
	let numl = document.getElementById('in1').value;
	let numcheck = numl.length;
	if (numcheck < 11) {
		alert("Please enter a valid PH mobile number.")
		console.log(numcheck);
	} else {
		if (initload < 10){
			alert("Insufficient funds.");
		} else {
			let numero = document.getElementById('in1').value;
			let btnval = 10;
			let balance = initload - btnval;

			document.getElementsByTagName('span')[0].innerText = balance;
			document.getElementById('history').innerHTML += "<p>"+"P10 is loaded to: "+numero+"</p>";
			initload = balance;
			console.log(numero);
		}
	}
})

document.getElementById('50').addEventListener('click', function(){
	let numl = document.getElementById('in1').value;
	let numcheck = numl.length;
	if (numcheck < 11) {
		alert("Please enter a valid PH mobile number.")
	} else {
		if (initload < 50){
			alert("Insufficient funds.");
		} else {
			let numero = document.getElementById('in1').value;
			let btnval = 50;
			let balance = initload - btnval;

			document.getElementsByTagName('span')[0].innerText = balance;
			document.getElementById('history').innerHTML += "<p>"+"P50 is loaded to: "+numero+"</p>";
			initload = balance;
			console.log(numero);
		}
	}
})

document.getElementById('100').addEventListener('click', function(){
	let numl = document.getElementById('in1').value;
	let numcheck = numl.length;
	if (numcheck < 11) {
		alert("Please enter a valid PH mobile number.")
	} else {
		if (initload < 100){
			alert("Insufficient funds.");
		} else {
			let numero = document.getElementById('in1').value;
			let btnval = 100;
			let balance = initload - btnval;

			document.getElementsByTagName('span')[0].innerText = balance;
			document.getElementById('history').innerHTML += "<p>"+"P100 is loaded to: "+numero+"</p>";
			initload = balance;
			console.log(numero);
		}
	}	
})
