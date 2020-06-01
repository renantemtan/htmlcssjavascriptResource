
$("li").click(function(x){
	alert($(this).text());

});


$("li").on("mouseenter", function(){
	$(this).css("font-weight", "bold")
});


$("li").on("mouseleave", function() {
	$(this).css("font-weight", "normal")
});
