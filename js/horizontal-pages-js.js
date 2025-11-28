// Nav Bar

	
	$(window).scroll(function(){
		if ($(this).scrollTop() == 0){
			$('.ezy-nav').removeClass('fixed');	
		}
		else if ($(this).scrollTop() > 0){
			$('.ezy-nav').addClass('fixed');				
		}
	});
	

	// Detect click on top of page	
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




// Content parallax 
$(document).ready(function() {
  //parallax scroll
  $(window).on("load scroll", function() {
		
	if (window.matchMedia("(min-width: 992px)").matches) {

		var parallaxContact = $(".parallax-contact"),
		  parallaxQuantity = parallaxContact.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxContact.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
			  scrolled = windowTop - elementTop + viewPortHeight;
			currentElement.css({
			  transform: "translate3d(0," + scrolled * 0.9 + "px, 0)"
			});
		  }
		});
	}
	
	else if (window.matchMedia("(min-width: 769px) and (max-width: 991px)").matches) {
	 		
		var parallaxContact = $(".parallax-contact"),
		  parallaxQuantity = parallaxContact.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxContact.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  viewPortHeight = window.innerHeight * 0.1 - elementHeight * 0.1,
			  scrolled = windowTop - elementTop + viewPortHeight;
			currentElement.css({
			  transform: "translate3d(0," + scrolled * 0.3 + "px, 0)"
			});
		  }
		});
	}
	
	else if (window.matchMedia("(min-width: 481px) and (max-width: 768px)").matches) {	 		
		
		var parallaxContact = $(".parallax-contact"),
		  parallaxQuantity = parallaxContact.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxContact.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  viewPortHeight = window.innerHeight * 0.1 - elementHeight * 0.1,
			  scrolled = windowTop - elementTop + viewPortHeight;
			currentElement.css({
			  transform: "translate3d(0," + scrolled * 0.3 + "px, 0)"
			});
		  }
		});
	}
	
	else if (window.matchMedia("(max-width: 480px)").matches) {		
		
		var parallaxContact = $(".parallax-contact"),
		  parallaxQuantity = parallaxContact.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxContact.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  viewPortHeight = window.innerHeight * 0.2 - elementHeight * 0.2,
			  scrolled = windowTop - elementTop + viewPortHeight;
			currentElement.css({
			  transform: "translate3d(0," + scrolled * 0.7 + "px, 0)"
			});
		  }
		});
	}
	
	
  });
});


  
  

