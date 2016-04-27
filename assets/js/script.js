$(document).ready(function() {

	$("#logo").fadeIn(2000);

var A = parseInt($('#carousel').css('margin-left').replace("px", ""));
$( "#carousel-prev" ).click(function() {
	if (A==0) {
	  return false;
	} else {
	      A = A + 960;
	    $("#carousel").css('margin-left', A + "px");
	  }
	});

$( "#carousel-next" ).click(function() {
	if (A==-3840) {
	  return false;
	} else {
	      A = A - 960;
	    $("#carousel").css('margin-left', A + "px");
	  }
	});
});