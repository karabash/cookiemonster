
$('.rating a').click(function () {
	var star = $(this);
	star.closest('ul').find('.checked').removeClass('checked');
	star.addClass('checked');
	return false;

});


