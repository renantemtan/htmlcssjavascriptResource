/*----Per DivButton Method with Else If----*/
// let q = document.querySelector("#Q");
// let w = document.querySelector("#W");
// let e = document.querySelector("#E");
// let r = document.querySelector("#R");
// let t = document.querySelector("#T");
// let y = document.querySelector("#Y");

// q.addEventListener('click', inputtobox);
// w.addEventListener('click', inputtobox);
// e.addEventListener('click', inputtobox);
// r.addEventListener('click', inputtobox);
// t.addEventListener('click', inputtobox);
// y.addEventListener('click', inputtobox);

// function inputtobox(x){
// 	// let textval = x.target.innerHTML;
// 	let textval = this.innerHTML;
// 	let q = document.getElementById('Q').innerHTML;
// 	let w = document.getElementById('W').innerHTML;
// 	let e = document.getElementById('E').innerHTML;
// 	let r = document.getElementById('R').innerHTML;
// 	let t = document.getElementById('T').innerHTML;
// 	let y = document.getElementById('Y').innerHTML;

// 	if (textval == "Q") {
// 		document.querySelector('#result').value += q;
// 	} else if (textval == "W") {
// 		document.querySelector('#result').value += w;
// 	} else if (textval == "E") {
// 		document.querySelector('#result').value += e;
// 	} else if (textval == "R") {
// 		document.querySelector('#result').value += r;
// 	} else if (textval == "T") {
// 		document.querySelector('#result').value += t;
// 	} else if (textval == "Y") {
// 		document.querySelector('#result').value += y;
// 	}
// }


/*----Loop Method thru Array Class----*/
function inputtobox(x){
	let value = x.target.innerHTML;
	let val = document.querySelector('#result').value;
	if (value == "Backspace") {
		document.querySelector('#result').value = val.substr(0, val.length -1);
	} else {
		document.querySelector('#result').value += value;
	}
}

let keys = document.querySelectorAll('.key');
let keyArray = Array.apply(null, keys);

keyArray.forEach(function(par1,par2){
	keys[par2].addEventListener("click",inputtobox);
});


