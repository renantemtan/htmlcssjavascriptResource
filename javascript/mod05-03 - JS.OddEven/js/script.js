
document.getElementsByTagName('button')[0].addEventListener('click', function(){
	let num = document.getElementsByTagName('input')[0].value;

    if(num % 2 == 0) {
    	document.getElementsByTagName('p')[0].innerHTML = 'Number is even!';
    } else {
    	document.getElementsByTagName('p')[0].innerHTML = 'Number is odd!';
    }

})
