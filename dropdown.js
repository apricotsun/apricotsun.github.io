$(document).ready((function() {
	$('#q-and-a li a').click(function(e) {
		$(this).next('div').slideToggle(0);
	});
}));