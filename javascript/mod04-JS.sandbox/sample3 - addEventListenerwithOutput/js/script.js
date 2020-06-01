

// let btn1 = document.querySelector('#btn1');

let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', function(){
	let userInput = prompt('Enter Name');
	document.getElementById('output').innerHTML = userInput;
})



