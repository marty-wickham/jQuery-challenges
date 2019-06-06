$(document).ready(function() {

	// $("a.bottom_button").replaceWith("<button>Button</Button>");

	/*	$("#btn1").click(function() {
			$("#par1").slideToggle(1000);
		});
		$("#btn2").click(function() {
			$("#par2").slideToggle(1000);
		});
		$("#btn3").click(function() {
			$("#par3").slideToggle(1000);
		});
		$("#hide").click(function() {
			$("#par4").slideToggle(1000);
		});
		$("#btn5").click(function() {
			$("#par5").slideToggle(1000);
		});
		$("#btn6").click(function() {
			$("#par6").slideToggle(1000);
		});
	*/
	$("button").click(function() {
		$("p").slideToggle(2000)
	});
	$("button").click(function() {
		$("p").hide(2000).show(2000); 
	});
		$("button").click(function() {
		$("p").fadeIn().fadeOut(); 
	});

	$("button").mouseenter(function() {
		$("button").addClass("makeBorder").removeClass("makeRed"); // method chaining 
	});

	$("button").mouseleave(function() {
		$("button").removeClass("makeBorder").addClass("makeRed");
	});


	$("#hr-html").hover(function() {
		$("#hr-html").addClass("grow");
		$("#hr-mysql").removeClass("grow");
		$("#hr-python").removeClass("grow");
		$("#hr-jquery").removeClass("grow");
		$("#hr-django").removeClass("grow");
		$("#hr-css").removeClass("grow");
	});

	$("#hr-mysql").hover(function() {
		$("#hr-html").removeClass("grow");
		$("#hr-mysql").addClass("grow");
		$("#hr-python").removeClass("grow");
		$("#hr-jquery").removeClass("grow");
		$("#hr-django").removeClass("grow");
		$("#hr-css").removeClass("grow");
	});

	$("#hr-python").hover(function() {
		$("#hr-html").removeClass("grow");
		$("#hr-mysql").removeClass("grow");
		$("#hr-python").addClass("grow");
		$("#hr-jquery").removeClass("grow");
		$("#hr-django").removeClass("grow");
		$("#hr-css").removeClass("grow");
	});

	$("#hr-jquery").hover(function() {
		$("#hr-html").removeClass("grow");
		$("#hr-mysql").removeClass("grow");
		$("#hr-python").removeClass("grow");
		$("#hr-jquery").addClass("grow");
		$("#hr-django").removeClass("grow");
		$("#hr-css").removeClass("grow");
	});

	$("#hr-django").hover(function() {
		$("#hr-html").removeClass("grow");
		$("#hr-mysql").removeClass("grow");
		$("#hr-python").removeClass("grow");
		$("#hr-jquery").removeClass("grow");
		$("#hr-django").addClass("grow");
		$("#hr-css").removeClass("grow");
	});

	$("#hr-css").hover(function() {
		$("#hr-html").removeClass("grow");
		$("#hr-mysql").removeClass("grow");
		$("#hr-python").removeClass("grow");
		$("#hr-jquery").removeClass("grow");
		$("#hr-django").removeClass("grow");
		$("#hr-css").addClass("grow");
	});

	$(".bottom_button").mouseenter(function() {
		$("body").addClass("page-color");
	});

	$(".bottom_button").mouseleave(function() {
		$("body").removeClass("page-color");
	});

	$("#stream1_btn").click(function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});


});
