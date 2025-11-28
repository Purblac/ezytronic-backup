// Popup form
	function showForm() {
		jQuery('.mb-form-container').addClass('show');	
	}
  
	function hideForm() {
		jQuery('.mb-form-container').removeClass('show');  
	}

// Newsletter Subscription
$(document).ready(function () {
         	$("#subscribeBtn").click(function (e) {
         
         		e.preventDefault();
         
         		const data = {
         			"subscriber_email": $('#subscribe-email').val()
         		};
         		$.ajax({
         			type: 'POST',
         			url: "server/subscribe_mail.php",
         			data: data,
         			success: (response) => {
         
         				const {
         					response_code
         				} = response;
         
         				if (response_code === 400) {
         					const {
         						response_msg: errorMessage
         					} = response;
         
         					$('#email-subscribe-msg')
         						.text(errorMessage)
         						.addClass('text-danger')
         						.fadeIn();
         				}
         
         				if (response_code === 200) {
         					$("#subscribed").toggle();
         				}
         
         				setTimeout(function () {
         					$("#email-subscribe-msg")
         						.removeClass('text-danger')
         						.removeClass('text-success')
         						.fadeOut().empty();
         				}, 2000); // 2 seconds
         
         				setTimeout(function () {
         					$("#subscribed").fadeOut().empty();
         				}, 7000); // 7 seconds
         
         			}
         		});
         
         	});
         });




// Nav Bar hiding by detect scrolling up or down
	var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
	  $('.sticky-top').addClass('hidden');
   } else {
      // upscroll code
	  $('.sticky-top').removeClass('hidden');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


// Mouse Cursor
	
	const cursor = document.querySelector("#mouse-circle");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
});
	

	

// Preloader	
	window.onload = function(){
		setTimeout(function(){ 
		$('.preloader-container').fadeOut('slow');
		}, 1500);
}

// Footer show & hide
	var a=1;
	function hideShow(){
		if(a==1){
			if (window.matchMedia("(min-width: 1024px)").matches) {
				$(".footer").animate({bottom: '-60px'});
				$('.bi-chevron-down').addClass('rotate');
				return a=0;
			}
			else if (window.matchMedia("(max-width: 768px)").matches) {
				$(".footer").animate({bottom: '-90px'});
				$('.bi-chevron-down').addClass('rotate');
				return a=0;
			}
		}
		else if(a==0){
			if (window.matchMedia("(min-width: 1024px)").matches) {
				$(".footer").animate({bottom: '0px'});
				$('.bi-chevron-down').removeClass('rotate');
				return a=1;
			}
			else if (window.matchMedia("(max-width: 768px)").matches) {
				$(".footer").animate({bottom: '0px'});
				$('.bi-chevron-down').removeClass('rotate');
				return a=1;
			}
		}
	}
	
	
// Collapsed Menu Interaction	
jQuery('li.nav-item').on('click', function() {
	if (window.matchMedia("(max-width: 992px)").matches) {
				$('.navbar-toggler').click();
	}
});

	
	
// // Gradient Mouseover Effect
	// document.querySelector('.why-sec').onmousemove = (e) => {
	// requestAnimationFrame(() =>{
	// const x = e.pageX - e.target.offsetLeft + $(".outer-wrapper").scrollTop();
	// const y = e.pageY - e.target.offsetTop;

	// e.target.style.setProperty('--x', `${ x }px`);
	// e.target.style.setProperty('--y', `${ y }px`);		
	// });
	// }
	




// Scorlling Light & Dark Theme changing
	function themeSwitch() {
	var sTop = $(".outer-wrapper").scrollTop();	
	
		if (window.matchMedia("(min-width: 1201px) and (max-width: 1440px)").matches) {
			if (sTop>=3614 && sTop<=13779){
				if (window.matchMedia("(min-width: 1024px)").matches) {
					$('.service-sec').addClass('dark');
					$('.team-sec').addClass('dark');
					$('.profile-card').addClass('dark');
					$('.service-header').addClass('dark');
					$('.site-logo').addClass('invert');
					$('.ezy-nav').addClass('invert');
					$('.navbar-toggler-icon').addClass('invert');	
					$('.ezy-nav.clicked').addClass('invert');	
					$('.serv-col').removeClass('light');
				}
			}
			else if (sTop<3614 || sTop>13779){
				if (window.matchMedia("(min-width: 1024px)").matches) {
					$('.service-sec').removeClass('dark');
					$('.team-sec').removeClass('dark');
					$('.profile-card').removeClass('dark');
					$('.service-header').removeClass('dark');
					$('.site-logo').removeClass('invert');
					$('.ezy-nav').removeClass('invert');
					$('.navbar-toggler-icon').removeClass('invert');
					$('.ezy-nav.clicked').removeClass('invert');			
					$('.serv-col').addClass('light');
				}
			}
		}
		
		else if (window.matchMedia("(min-width: 992px) and (max-width: 1200px)").matches) {
			if (sTop>=3006 && sTop<=11886){
				if (window.matchMedia("(min-width: 1024px)").matches) {
					$('.service-sec').addClass('dark');
					$('.team-sec').addClass('dark');
					$('.profile-card').addClass('dark');
					$('.service-header').addClass('dark');
					$('.site-logo').addClass('invert');
					$('.ezy-nav').addClass('invert');
					$('.navbar-toggler-icon').addClass('invert');
					$('.ezy-nav.clicked').addClass('invert');					
					$('.serv-col').removeClass('light');
				}
			}
			else if (sTop<3006 || sTop>11886){
				if (window.matchMedia("(min-width: 1024px)").matches) {
					$('.service-sec').removeClass('dark');
					$('.team-sec').removeClass('dark');
					$('.profile-card').removeClass('dark');
					$('.service-header').removeClass('dark');
					$('.site-logo').removeClass('invert');
					$('.ezy-nav').removeClass('invert');
					$('.navbar-toggler-icon').removeClass('invert');
					$('.ezy-nav.clicked').removeClass('invert');					
					$('.serv-col').addClass('light');
				}
			}
		}
		
		else if (window.matchMedia("(min-width: 1201px) and (max-width: 1919px)").matches) {
			if (sTop>=3743 && sTop<=15230){
				if (window.matchMedia("(min-width: 1024px)").matches) {
					$('.service-sec').addClass('dark');
					$('.team-sec').addClass('dark');
					$('.profile-card').addClass('dark');
					$('.service-header').addClass('dark');
					$('.site-logo').addClass('invert');
					$('.ezy-nav').addClass('invert');
					$('.navbar-toggler-icon').addClass('invert');
					$('.ezy-nav.clicked').addClass('invert');									
					$('.serv-col').removeClass('light');
				}
			}
			else if (sTop<3743 || sTop>15230){
				if (window.matchMedia("(min-width: 1024px)").matches) {
					$('.service-sec').removeClass('dark');
					$('.team-sec').removeClass('dark');
					$('.profile-card').removeClass('dark');
					$('.service-header').removeClass('dark');
					$('.site-logo').removeClass('invert');
					$('.ezy-nav').removeClass('invert');
					$('.navbar-toggler-icon').removeClass('invert');
					$('.ezy-nav.clicked').removeClass('invert');							
					$('.serv-col').addClass('light');
				}
			}
		}
		
		else if (window.matchMedia("(min-width: 1920px)").matches) {
			if (sTop>=4896 && sTop<=19048){
				if (window.matchMedia("(min-width: 1024px)").matches) {
					$('.service-sec').addClass('dark');
					$('.team-sec').addClass('dark');
					$('.profile-card').addClass('dark');
					$('.service-header').addClass('dark');
					$('.site-logo').addClass('invert');
					$('.ezy-nav').addClass('invert');		
					$('.navbar-toggler-icon').addClass('invert');
					$('.ezy-nav.clicked').addClass('invert');											
					$('.serv-col').removeClass('light');
				}
			}
			else if (sTop<4896 || sTop>19048){
				if (window.matchMedia("(min-width: 1024px)").matches) {
					$('.service-sec').removeClass('dark');
					$('.team-sec').removeClass('dark');
					$('.profile-card').removeClass('dark');
					$('.service-header').removeClass('dark');
					$('.site-logo').removeClass('invert');
					$('.ezy-nav').removeClass('invert');
					$('.navbar-toggler-icon').removeClass('invert');	
					$('.ezy-nav.clicked').removeClass('invert');								
					$('.serv-col').addClass('light');
				}
			}
		}
	}

	

// Mobile Scroll Theme change


		
	$(window).scroll(function(){
		if (window.matchMedia("(min-width: 769px) and (max-width: 991px)").matches) {
			
			if ($('.service-sec.dark')) {
					$('.site-logo').removeClass('invert');
					$('.ezy-nav').removeClass('invert');
			}
			
			var hTop = $(window).scrollTop();
				if (hTop>=2371){
					$('.service-sec').addClass('dark');
					$('.team-sec').addClass('dark');
					$('.profile-card').addClass('dark');		
					$('.serv-col').removeClass('light');
					$('.service-header').addClass('dark');
				}
				else if (hTop<2371){
					$('.service-sec').removeClass('dark');
					$('.team-sec').removeClass('dark');
					$('.profile-card').removeClass('dark');
					$('.serv-col').addClass('light');
					$('.service-header').removeClass('dark');
				}
		}
		
		else if (window.matchMedia("(min-width: 481px) and (max-width: 768px)").matches) {
			
			var hTop = $(window).scrollTop();
				if (hTop>=2000){
					$('.service-sec').addClass('dark');
					$('.team-sec').addClass('dark');
					$('.profile-card').addClass('dark');		
					$('.serv-col').removeClass('light');
					$('.service-header').addClass('dark');
				}
				else if (hTop<2000){
					$('.service-sec').removeClass('dark');
					$('.team-sec').removeClass('dark');
					$('.profile-card').removeClass('dark');
					$('.serv-col').addClass('light');
					$('.service-header').removeClass('dark');
				}
		}
		
		else if (window.matchMedia("(max-width: 480px)").matches) {
			
			if ($('.service-sec.dark')) {
					$('.site-logo').removeClass('invert');
					$('.ezy-nav').removeClass('invert');
			}
			
			var hTop = $(window).scrollTop();
				if (hTop>=2075){
					$('.service-sec').addClass('dark');
					$('.team-sec').addClass('dark');
					$('.profile-card').addClass('dark');		
					$('.serv-col').removeClass('light');
					$('.service-header').addClass('dark');
				}
				else if (hTop<2075){
					$('.service-sec').removeClass('dark');
					$('.team-sec').removeClass('dark');
					$('.profile-card').removeClass('dark');
					$('.serv-col').addClass('light');
					$('.service-header').removeClass('dark');
				}
		}
	});
	

// $(window).scroll(function(){
	// var hTop = $(window).scrollTop();	
	
	// if (hTop>=1782){
	// $('.service-sec').addClass('dark');
	// }
	// else if (hTop<1782){
	// $('.service-sec').removeClass('dark');
	// }
// });	
	
									  
// Hover Filled-Up Interaction	
	$('.contact-btn')
  .mouseover(function() {
    $('.contact-txt').addClass('hovered');
  })
  .mouseout(function() {
    $('.contact-txt').removeClass('hovered');
  });



// Tab timeline
jQuery(document).ready(function($){
	if (window.matchMedia("(min-width: 1024px)").matches) {
		var timelines = $('.cd-horizontal-timeline'),
			eventsMinDistance = 80;
	}
	else if (window.matchMedia("(max-width: 992px)").matches) {
		var timelines = $('.cd-horizontal-timeline'),
			eventsMinDistance = 50;
	}

	(timelines.length > 0) && initTimeline(timelines);

	function initTimeline(timelines) {
		timelines.each(function(){
			var timeline = $(this),
				timelineComponents = {};
			//cache timeline components 
			timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
			timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
			timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
			timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
			timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
			timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
			timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
			timelineComponents['eventsContent'] = timeline.children('.events-content');

			//assign a left postion to the single events along the timeline
			setDatePosition(timelineComponents, eventsMinDistance);
			//assign a width to the timeline
			var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
			//the timeline has been initialize - show it
			timeline.addClass('loaded');

			//detect click on the next arrow
			timelineComponents['timelineNavigation'].on('click', '.next', function(event){
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, 'next');
			});
			//detect click on the prev arrow
			timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, 'prev');
			});
			//detect click on the a single event - show new event content
			timelineComponents['eventsWrapper'].on('click', 'a', function(event){
				event.preventDefault();
				timelineComponents['timelineEvents'].removeClass('selected');
				$(this).addClass('selected');
				updateOlderEvents($(this));
				updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
				updateVisibleContent($(this), timelineComponents['eventsContent']);
			});

			//on swipe, show next/prev event content
			timelineComponents['eventsContent'].on('swipeleft', function(){
				var mq = checkMQ();
				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
			});
			timelineComponents['eventsContent'].on('swiperight', function(){
				var mq = checkMQ();
				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
			});

			//keyboard navigation
			$(document).keyup(function(event){
				if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
					showNewContent(timelineComponents, timelineTotWidth, 'prev');
				} else if( event.which=='39' && elementInViewport(timeline.get(0))) {
					showNewContent(timelineComponents, timelineTotWidth, 'next');
				}
			});
		});
	}

	function updateSlide(timelineComponents, timelineTotWidth, string) {
		//retrieve translateX value of timelineComponents['eventsWrapper']
		var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
			wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
		//translate the timeline to the left('next')/right('prev') 
		(string == 'next') 
			? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
			: translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
	}

	function showNewContent(timelineComponents, timelineTotWidth, string) {
		//go from one event to the next/previous one
		var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
			newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();

		if ( newContent.length > 0 ) { //if there's a next/prev event - show it
			var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
				newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
			
			updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
			updateVisibleContent(newEvent, timelineComponents['eventsContent']);
			newEvent.addClass('selected');
			selectedDate.removeClass('selected');
			updateOlderEvents(newEvent);
			updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
		}
	}

	function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
		//translate timeline to the left/right according to the position of the selected event
		var eventStyle = window.getComputedStyle(event.get(0), null),
			eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
			timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
			timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
		var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

        if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
        	translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
        }
	}

	function translateTimeline(timelineComponents, value, totWidth) {
		var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
		value = (value > 0) ? 0 : value; //only negative translate value
		value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
		setTransformValue(eventsWrapper, 'translateX', value+'px');
		//update navigation arrows visibility
		(value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
		(value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
	}

	function updateFilling(selectedEvent, filling, totWidth) {
		//change .filling-line length according to the selected event
		var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
			eventLeft = eventStyle.getPropertyValue("left"),
			eventWidth = eventStyle.getPropertyValue("width");
		eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
		var scaleValue = eventLeft/totWidth;
		setTransformValue(filling.get(0), 'scaleX', scaleValue);
	}

	function setDatePosition(timelineComponents, min) {
		for (i = 0; i < timelineComponents['timelineDates'].length; i++) { 
		    var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
		    	distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
		    timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
		}
	}

	function setTimelineWidth(timelineComponents, width) {
		var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
			timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
			timeSpanNorm = Math.round(timeSpanNorm) + 4,
			totalWidth = timeSpanNorm*width;
		timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
		updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);
	
		return totalWidth;
	}

	function updateVisibleContent(event, eventsContent) {
		var eventDate = event.data('date'),
			visibleContent = eventsContent.find('.selected'),
			selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
			selectedContentHeight = selectedContent.height();

		if (selectedContent.index() > visibleContent.index()) {
			var classEnetering = 'selected enter-right',
				classLeaving = 'leave-left';
		} else {
			var classEnetering = 'selected enter-left',
				classLeaving = 'leave-right';
		}

		selectedContent.attr('class', classEnetering);
		visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			visibleContent.removeClass('leave-right leave-left');
			selectedContent.removeClass('enter-left enter-right');
		});
		eventsContent.css('height', selectedContentHeight+'px');
	}

	function updateOlderEvents(event) {
		event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
	}

	function getTranslateValue(timeline) {
		var timelineStyle = window.getComputedStyle(timeline.get(0), null),
			timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
         		timelineStyle.getPropertyValue("-moz-transform") ||
         		timelineStyle.getPropertyValue("-ms-transform") ||
         		timelineStyle.getPropertyValue("-o-transform") ||
         		timelineStyle.getPropertyValue("transform");

        if( timelineTranslate.indexOf('(') >=0 ) {
        	var timelineTranslate = timelineTranslate.split('(')[1];
    		timelineTranslate = timelineTranslate.split(')')[0];
    		timelineTranslate = timelineTranslate.split(',');
    		var translateValue = timelineTranslate[4];
        } else {
        	var translateValue = 0;
        }

        return Number(translateValue);
	}

	function setTransformValue(element, property, value) {
		element.style["-webkit-transform"] = property+"("+value+")";
		element.style["-moz-transform"] = property+"("+value+")";
		element.style["-ms-transform"] = property+"("+value+")";
		element.style["-o-transform"] = property+"("+value+")";
		element.style["transform"] = property+"("+value+")";
	}

	//based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
	function parseDate(events) {
		var dateArrays = [];
		events.each(function(){
			var dateComp = $(this).data('date').split('/'),
				newDate = new Date(dateComp[2], dateComp[1]-1, dateComp[0]);
			dateArrays.push(newDate);
		});
	    return dateArrays;
	}

	function parseDate2(events) {
		var dateArrays = [];
		events.each(function(){
			var singleDate = $(this),
				dateComp = singleDate.data('date').split('T');
			if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
				var dayComp = dateComp[0].split('/'),
					timeComp = dateComp[1].split(':');
			} else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
				var dayComp = ["2000", "0", "0"],
					timeComp = dateComp[0].split(':');
			} else { //only DD/MM/YEAR
				var dayComp = dateComp[0].split('/'),
					timeComp = ["0", "0"];
			}
			var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
			dateArrays.push(newDate);
		});
	    return dateArrays;
	}

	function daydiff(first, second) {
	    return Math.round((second-first));
	}

	function minLapse(dates) {
		//determine the minimum distance among events
		var dateDistances = [];
		for (i = 1; i < dates.length; i++) { 
		    var distance = daydiff(dates[i-1], dates[i]);
		    dateDistances.push(distance);
		}
		return Math.min.apply(null, dateDistances);
	}

	/*
		How to tell if a DOM element is visible in the current viewport?
		http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	*/
	function elementInViewport(el) {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;

		while(el.offsetParent) {
		    el = el.offsetParent;
		    top += el.offsetTop;
		    left += el.offsetLeft;
		}

		return (
		    top < (window.pageYOffset + window.innerHeight) &&
		    left < (window.pageXOffset + window.innerWidth) &&
		    (top + height) > window.pageYOffset &&
		    (left + width) > window.pageXOffset
		);
	}

	function checkMQ() {
		//check if mobile or desktop device
		return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
	}
});


 // tabbed content
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	


  // jQuery('.btn-close,#overlay').on('click', function() {
      // jQuery('#form-overlay').removeClass('form-overlay-active');
    // jQuery(".form-pop-up").fadeOut("fast", function() {
      // jQuery('.form-pop-up').removeClass('form-pop-up-active');
    // });
  // });
  // });
	

	// Case Study Owl Carousel
	
	$('.owl-cs').owlCarousel({
  center: true,
  loop: true,
  nav: true,
  items: 5,
  navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
  responsive:{
    0:{
      items: 2,
    },
    768:{
      items: 3,
    },
    990:{
      items: 5,
    }
  },
  onInitialized: coverFlowEfx,
  onTranslate: coverFlowEfx,
});

function coverFlowEfx(e){
  idx = e.item.index;
  $('.owl-item.big').removeClass('big');
  $('.owl-item.medium').removeClass('medium');
  $('.owl-item.mdright').removeClass('mdright');
  $('.owl-item.mdleft').removeClass('mdleft');
  $('.owl-item.smallRight').removeClass('smallRight');
  $('.owl-item.smallLeft').removeClass('smallLeft');
  $('.owl-item').eq(idx -1).addClass('medium mdleft');
  $('.owl-item').eq(idx).addClass('big');
  $('.owl-item').eq(idx + 1).addClass('medium mdright');
  $('.owl-item').eq(idx + 2).addClass('smallRight');
  $('.owl-item').eq(idx - 2).addClass('smallLeft');
}

// var click = false;



	
	// Testimonial Owl Carousel
	$('.owl-testi').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
	responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
        },
        992:{
            items:3,
            nav:false,
        }
    }
})


// Client Owl Carousel
$('.owl-client').owlCarousel({
	loop: true,
	margin: 10,
	dots: false,
	nav: true,
	navText: ['<img class="prev-btn" src="media/icons/left-arrow.svg" alt="prev" />', '<img class="next-btn" src="media/icons/right-arrow.svg" alt="next" />'],
	items: 3,
	slideBy: 3,
	mouseDrag: false,
	touchDrag: false
});

	// Career Owl Carousel
	$('.owl-career').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false,
			},
			768:{
				items:2,
			},
			992:{
				items:4,
				nav:false,
			}
		}
	})


//Conditional Form



// Mouse enter interaction	
	$('.hover-area').on('mouseenter', function() {
	  $('#mouse-circle').addClass('enter');
	});
	
	$('.hover-area').on('mouseleave', function() {
	  $('#mouse-circle').removeClass('enter');
	});		
	
	$('.owl-dot').on('mouseenter', function() {
	  $('#mouse-circle').addClass('enter');
	});
	
	$('.owl-dot').on('mouseleave', function() {
	  $('#mouse-circle').removeClass('enter');
	});	
	
	$('.hover-area-diff').on('mouseenter', function() {
	  $('#mouse-circle').addClass('enter-diff');
	});
	
	$('.hover-area-diff').on('mouseleave', function() {
	  $('#mouse-circle').removeClass('enter-diff');
	});	
	
	$('.owl-prev i.bi.bi-chevron-left').on('mouseenter', function() {
	  $('#mouse-circle').addClass('enter-diff');
	});
	
	$('.owl-prev i.bi.bi-chevron-left').on('mouseleave', function() {
	  $('#mouse-circle').removeClass('enter-diff');
	});	
	
	$('.owl-next i.bi.bi-chevron-right').on('mouseenter', function() {
	  $('#mouse-circle').addClass('enter-diff');
	});
	
	$('.owl-next i.bi.bi-chevron-right').on('mouseleave', function() {
	  $('#mouse-circle').removeClass('enter-diff');
	});	
	
	$('.cd-horizontal-timeline .timeline li').on('mouseenter', function() {
	  $('#mouse-circle').addClass('enter-diff');
	});
	
	$('.cd-horizontal-timeline .timeline li').on('mouseleave', function() {
	  $('#mouse-circle').removeClass('enter-diff');
	});