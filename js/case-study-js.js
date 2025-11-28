// Nav Bar
	window.onload = function(){
		if ($(this).scrollTop() == 0){
			$('.site-logo').addClass('invert');
			$('.ezy-nav').addClass('invert');	
			$('.navbar-toggler-icon').addClass('invert');	
		}
		else if ($(this).scrollTop() > 0){
			$('.site-logo').removeClass('invert');
			$('.ezy-nav').removeClass('invert');	
			$('.navbar-toggler-icon').removeClass('invert');	
		}
	}
	
	$(window).scroll(function(){
		if ($(this).scrollTop() == 0){
			$('.site-logo').addClass('invert');
			$('.ezy-nav').addClass('invert');	
			$('.navbar-toggler-icon').addClass('invert');	
			$('.ezy-nav').removeClass('fixed');	
		}
		else if ($(this).scrollTop() > 0){
			$('.site-logo').removeClass('invert');
			$('.ezy-nav').removeClass('invert');
			$('.navbar-toggler-icon').removeClass('invert');
			$('.ezy-nav').addClass('fixed');				
		}
	});
	

	// Detect click on top of page	
	var mbClick=0;
jQuery('.navbar-toggler').on('click', function() {
	if ($(this).scrollTop() == 0){
		if(mbClick==0){
			$('.ezy-nav').addClass('clicked');
			$('.site-logo').removeClass('invert');
			$('.ezy-nav').removeClass('invert');	
			$('.navbar-toggler-icon').removeClass('invert');	
			return mbClick=1;
		}
		else if (mbClick==1){
			$('.ezy-nav').removeClass('clicked');
			$('.site-logo').addClass('invert');
			$('.ezy-nav').addClass('invert');	
			$('.navbar-toggler-icon').addClass('invert');
			return mbClick=0;
		}
	}
});


// Content parallax 
$(document).ready(function() {
  //parallax scroll
  $(window).on("load scroll", function() {
		
	if (window.matchMedia("(min-width: 992px)").matches) {
	 
		var parallaxElement = $(".parallax_scroll"),
		  parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxElement.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  scrolled = windowTop - elementTop;
			currentElement.css({
			  transform: "translate3d(0," + scrolled * 0.9 + "px, 0)"
			});
		  }
		});    
		
		
		var parallaxContact = $(".parallax-contact"),
		  parallaxQuantity = parallaxElement.length;
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
	 
		var parallaxElement = $(".parallax_scroll"),
		  parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxElement.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  scrolled = windowTop - elementTop;
			currentElement.css({
			  transform: "translate3d(0," + scrolled * 0.9 + "px, 0)"
			});
		  }
		});    
		
		
		var parallaxContact = $(".parallax-contact"),
		  parallaxQuantity = parallaxElement.length;
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
	 
		var parallaxElement = $(".parallax_scroll"),
		  parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxElement.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  scrolled = windowTop - elementTop;
			currentElement.css({
			  transform: "translate3d(0," + scrolled * 0.9 + "px, 0)"
			});
		  }
		});    
		
		
		var parallaxContact = $(".parallax-contact"),
		  parallaxQuantity = parallaxElement.length;
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
	 
		var parallaxElement = $(".parallax_scroll"),
		  parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function() {
		  for (var i = 0; i < parallaxQuantity; i++) {
			var currentElement = parallaxElement.eq(i),
			  windowTop = $(window).scrollTop(),
			  elementTop = currentElement.offset().top,
			  elementHeight = currentElement.height(),
			  scrolled = windowTop - elementTop;
			currentElement.css({
			  transform: "translate3d(0," + scrolled * 0.9 + "px, 0)"
			});
		  }
		});    
		
		
		var parallaxContact = $(".parallax-contact"),
		  parallaxQuantity = parallaxElement.length;
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


  
  
	// Pop Up Form
	function showForm() {
		jQuery('.mb-form-container').addClass('show');	
	}
  
	function hideForm() {
		jQuery('.mb-form-container').removeClass('show');  
	}


// Hover fill-up-animation
$('.next-btn-sec')
  .mouseover(function() {
    $('.cs-next-name').addClass('hovered');
  })
  .mouseout(function() {
    $('.cs-next-name').removeClass('hovered');
  });