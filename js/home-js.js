// Nav Bar Sticky Response
$(window).scroll(function(){
	$('.ezy-nav').toggleClass('fixed', $(this).scrollTop() > 50);
});

var mbClick=0;
jQuery('.navbar-toggler').on('click', function() {
	if ($(this).scrollTop() == 0){
		if(mbClick==0){
			$('.ezy-nav').addClass('clicked');
			return mbClick=1;
		}
		else if (mbClick==1){
			$('.ezy-nav').removeClass('clicked');
			return mbClick=0;
		}
	}
});
