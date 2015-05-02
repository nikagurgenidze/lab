$( document ).ready(function() { // A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you.

	$("#menu").click(function() {
	  $(this).toggleClass("rotate");
	});
	console.log("click");

});

