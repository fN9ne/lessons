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
	$(document).on('click', 'a[href^="#"]', function(e) {
		e.preventDefault();
		$('.page').animate({
			scrollTop: $($.attr(this, 'href')).position().top,
		}, 500);
	});
	if ($(window).width() > 1360) {
		let scrollArr = [];
		for (let i = 0; i < $('h2, h4').length; i++) {
			num = i+1;
			if (num == $('h2, h4').length) {
				scrollArr.push($('h2, h4').eq(i).position().top);
			} else {
				scrollArr.push($('h2, h4').eq(i).position().top + ($('h2, h4').eq(num).position().top - $('h2, h4').eq(i).position().top - 50));
			}
		}
		$('.page').on('scroll', function() {
			tempArr = [];
			scrollArr.forEach(function(item, i, arr) {
				pos = item - $('.page').scrollTop();
				tempArr.push(pos);
			});
			arrayIndex = tempArr.indexOf(arraySort(tempArr));
			$('.page-nav').find('a').removeClass('active');
			$('.page-nav').find(`a[href="#${$('h2, h4').eq(arrayIndex).attr('id')}"]`).addClass('active');
		});
		function arraySort(arr) {
			min = 100000;
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] < min && arr[i] > -1) min = arr[i];
			}
			return min;
		}
	}
});