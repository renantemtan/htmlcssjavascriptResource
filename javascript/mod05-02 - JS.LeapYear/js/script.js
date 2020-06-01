function leapyear(year){
	return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}


document.getElementsByTagName('button')[0].addEventListener('click', function(){
	let year = document.getElementsByTagName('input')[0].value;
	let result = leapyear(year);

	if (result == true) {
		document.getElementsByTagName('p')[0].innerHTML	= "The year is a leap year.";
	} else {
		document.getElementsByTagName('p')[0].innerHTML	= "The year is not a leap year.";	
	}

})
