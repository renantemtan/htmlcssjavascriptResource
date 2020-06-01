
// Code to delete an item on the list when the X image is clicked.
$(document).on('click','.del',function(){
	$(this).parent().remove();
});

// Code to toggle the display of the X image slide right to left and vice versa on mouseleave or mouseenter.
$(document).on("mouseenter",".list",function(){
	$(this).children().animate({width: "toggle"});
	console.log('mouseenter');
});

$(document).on("mouseleave",".list",function(){
	$(this).children().animate({width: "toggle"});
	console.log('mouseleave');
});

// Code to put a line-through text decoration when a list item is clicked.
$(document).on("click",".list",function(){
	$(this).css("text-decoration","line-through");
});


// Code to enter new item on the list when "Enter" key is pressed.
$('input').keypress(function(){
	let keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13'){
		let listcheck = document.querySelectorAll('.list');
		console.log(listcheck.length);
		let newtodo = document.getElementById('input').value;
		let print = "yes";

		for (let counter=0; counter < listcheck.length; counter++){
			if (listcheck[counter].innerText == newtodo){
				console.log(listcheck[counter].innerText);
				print = "no";
				break;
			} else {
				if (print == "no"){
					print = "no";
				} else { 
					print = "yes";
				};
			};
		};

		if (print=='yes') {
			document.querySelector('#todo').innerHTML += `<div><button><img src="img/delete.jpg"></button> ${newtodo}</div>`;
			$('button').last().addClass("del");
			$('div').last().addClass("list");
			document.getElementById('input').value = "";
		} else {
			alert("Item already on the list!")
		};
	};
});

// Code to enter new item on the list when button is clicked.
document.getElementsByTagName('button')[0].addEventListener('click', function(){
	let listcheck = document.querySelectorAll('.list');
	console.log(listcheck.length);
	let newtodo = document.getElementById('input').value;
	let print = "yes";
	for (let counter=0; counter < listcheck.length; counter++){
		if (listcheck[counter].innerText == newtodo){
			console.log(listcheck[counter].innerText);
			print = "no";				
			break;
		} else {
			if (print == "no"){
				print = "no";
			} else { 
				print = "yes";
			};
		};
	};

	if (print=='yes') {
		document.querySelector('#todo').innerHTML += `<div><button><img src="img/delete.jpg"></button> ${newtodo}</div>`;
		$('button').last().addClass("del");
		$('div').last().addClass("list");
		document.getElementById('input').value = "";
	} else {
		alert("Item already on the list!")
	};
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



















