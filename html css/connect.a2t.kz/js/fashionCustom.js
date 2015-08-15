var $f = jQuery.noConflict();


/* :::::::::::::: SMOOTHMENU ::::::::::::: */


$f(document).ready(function(){ 
	
	
	
	/* :::::::::::::: FANCYBOX ::::::::::::: */
	$f('.fancybox').fancybox({});
	
	/* :::::::::::::: PORTFOLIO FILTER (ISOTOPE) ::::::::::::: */
	// Needed variables
	var $container	 	= $f("#portfolio-list");
	var $filter 		= $f("#portfolio-filter");
		
	// Run Isotope  
	$container.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	
	
	// Isotope Filter 
	$filter.find('a').click(function(){
	  var selector = $f(this).attr('data-filter');
		$container.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});	
	
	

});


