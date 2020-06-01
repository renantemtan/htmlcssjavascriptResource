		
$("#clicker").click(function(){
	$(".box").slideToggle("slow");
	console.log("slideup");
});

$("#one").mouseover(function(){
	$("h1").text($("#one").text());
});

$("#one").mouseout(function(){
	$("h1").text("jQuery Effects");
});

$("#two").mouseover(function(){
	$("h1").text($("#two").text());
});

$("#two").mouseout(function(){
	$("h1").text("jQuery Effects");
});

$("#three").mouseover(function(){
	$("h1").text($("#three").text());
});

$("#three").mouseout(function(){
	$("h1").text("jQuery Effects");
});

$("#one").click(function(){
	$("#one").toggle(1000);
});

$("#two").click(function(){
	$("#two").toggle(1000);
});

$("#three").click(function(){
	$("#three").toggle(1000);
});


// $(document).ready(function(){
//   $("#one").hover(function(){
//     $("h1").css("background-color", "yellow");
//     console.log("mouseover");
//   });
//   $("#one").mouseout(function(){
//     $("h1").css("background-color", "lightgray");
//   });
// });



// $("#hide").click(function(x){
// 	$('div').fadeOut(1000);
// });

// $("#show").click(function(x){
// 	$('div').fadeIn(5000, function(){
// 		$('#content').html("Yo man!");
// 	});
// });

// $("#toggle").click(function(x){
// 	$('div').toggle();
// });

// $("#ccontent").click(function(x){
// 	$('#content').html("Hellow World.");
// });


// $("#cimg").click(function(){
// 	$("img").attr("src","img/tuitt2.png")
// });

// $("#cheight").on("click",function(){
// 	$("img").attr("width","100px")
// });

// $("#cstyle").click(function() {
// 	$("#content2").css("color", "blue")
// });
