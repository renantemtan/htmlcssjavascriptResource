
$("#hide").click(function(x){
	$('div').fadeOut(1000);
});

$("#show").click(function(x){
	$('div').fadeIn(5000, function(){
		$('#content').html("Yo man!");
	});
});

$("#toggle").click(function(x){
	$('div').toggle();
});

$("#ccontent").click(function(x){
	$('#content').html("Hellow World.");
});


$("#cimg").click(function(){
	$("img").attr("src","img/tuitt2.png")
});

$("#cheight").on("click",function(){
	$("img").attr("width","100px")
});

$("#cstyle").click(function() {
	$("#content2").css("color", "blue")
});
