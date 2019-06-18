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

	$("button").on("click", function() { // traversing challenge 1
		$(this).prev().slideToggle('slow');
	});

	$("img").click(function() {
		$(this).next().children("p").slideDown(); // traversing challenge 2
	});

	$(".card").click(function() {
		$(this).toggleClass("card-bg"); // traversing challenge 3
	});

	$('p').on("click", function() {
		$(this).children('a').addClass("highlight"); // challenge
	})

	$(".stream").on("click", function() {
		var allCards = ".card";
		var cardSelector = "." + this.id;

		$(allCards).removeClass("highlight_stream");
		$(cardSelector).addClass("highlight_stream");
	});

	$("#select").click(function() {
		$(".card:not(.highlight)").hide();
	});
	
	$("#all").click(function() {
		$(".card").show();	
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


});

/*

	$("button").mouseenter(function() {
		$("button").addClass("makeBorder").removeClass("makeRed"); // method chaining 
	});

	$("button").mouseleave(function() {
		$("button").removeClass("makeBorder").addClass("makeRed");
	});
	
*/

/*

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
	
*/

/*

	$(".card").on("click", function() {
		var classNames = $(this).attr("class").split(" ");        // changes card background whe you click the card.
		var cardName = classNames[0];
		var streamName = classNames[1];
		
		if($(this).css("background-color") == "rgb(255, 0, 0)") {
			$("." + streamName).css("background-color", "#fff");
		} else {
			$("." + cardName).css("background-color", "#fff");
			$("." + streamName).css("background-color", "red");
		}
	});
	
*/

/*
	
		$("button").click(function() {
		$("p").slideToggle(2000)
	});
	$("button").click(function() {
		$("p").hide(2000).show(2000); 
	});
		$("button").click(function() {
		$("p").fadeIn().fadeOut(); 
	});
	
*/
