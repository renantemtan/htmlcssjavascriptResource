document.getElementById('blue').addEventListener('click', function(){
	let num1 = parseFloat(document.getElementById('num1').value);
	let num2 = parseFloat(document.getElementById('num2').value);

	if (num1 > num2) {
		document.getElementsByTagName('strong')[0].innerHTML = num1;
		console.log(num1);
	} else if (num1 < num2) {
		document.getElementsByTagName('strong')[0].innerHTML = num2;
		console.log(num2);
	} else if (num1 == num2){
		document.getElementsByTagName('strong')[0].innerHTML = "Equal numbers";
	} else {
		document.getElementsByTagName('strong')[0].innerHTML = "Please enter a valid number.";
	}
})

document.getElementById('green').addEventListener('click', function(){
	let grade = parseFloat(document.getElementById('grade').value);
	if (grade >= 90) {
		document.getElementsByTagName('strong')[1].innerHTML = "A";
	} else if (grade >= 80) {
		document.getElementsByTagName('strong')[1].innerHTML = "B";
	} else if (grade >= 70) {
		document.getElementsByTagName('strong')[1].innerHTML = "C";
	} else if (grade < 70) {
		document.getElementsByTagName('strong')[1].innerHTML = "D";		
	} else {
		document.getElementsByTagName('strong')[1].innerHTML = "Not a valid grade";		
	}
})

function selectfunc(){
	let x = document.getElementById('language').value;
	console.log(x)

	if (x == "French") {
		document.getElementsByTagName('p')[0].innerHTML = "Bonjour le monde!";				
	} else if (x == "Italian") {
		document.getElementsByTagName('p')[0].innerHTML = "Ciao mondo!";				
	} else if (x == "Chinese") {
		document.getElementsByTagName('p')[0].innerHTML = "Ni hao, shijie!";				
	} else if (x == "Filipino") {
		document.getElementsByTagName('p')[0].innerHTML = "Kumusta mundo!";				
	} else {

	}

}