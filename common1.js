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

	$("#popup_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
window.location.href = "thanks.html";
			$("#popup_form").trigger("reset");
		});
		return false;
	});
	
});

