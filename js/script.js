$(document).ready(function() {
	$('.sidebar__button').on('click', function() {
		$('.sidebar').toggleClass('active')
	});
	function headerButton() {
		if ($(window).width() <= 992) {
			$('.sidebar').removeClass('active');
			$('.header__button').unbind('click');
			$('.header__button').on('click', function() {
				$(this).toggleClass('active');
				$('.header-menu').toggleClass('active');
			});
		} else {
			$('.header__button').unbind('click');
			$('.header__button').removeClass('active');
			$('.header-menu').removeClass('active');
		}
	}
	$(window).on('load resize', headerButton);
});