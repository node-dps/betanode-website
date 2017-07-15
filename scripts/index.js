var main= function(){
	$('.scroll-but').click(function(){
		$('window,body').animate({
			scrollTop: $('.about').offset().top
		},800);
	});
}
$(document).ready(main);