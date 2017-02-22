// $(document).ready(function() {

// 	$("#form").submit(function() {
// 		$.ajax({
// 			type: "POST",
// 			url: "send.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$(this).find("input").val("");
//     $('.popup-container-th').show();
// 			$("#form").trigger("reset");
// 		});
// 		return false;
// 	});
	
// });

$(document).ready(function() {

	$("#bottom_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
window.location.href = "thanks.html";
			$("#bottom_form").trigger("reset");
		});
		return false;
	});
	
});

