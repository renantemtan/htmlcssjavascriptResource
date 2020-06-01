

$("body").click(function(e){
	alert("body");
});

$("form").click(function(e){
	alert("form");
	// e.stopPropagation();
});

$("div").click(function(e){
	alert("div");
	$(this).children().remove();
	// e.stopPropagation();
});

$("p").click(function(e){
	alert("p");
	// $(this).parent().remove();
	// e.stopPropagation();
});


