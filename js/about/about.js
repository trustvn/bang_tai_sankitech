$(document).ready(function($) {
	$(".slideProduct").slick({
        slidesToShow:2,
        slidesToScroll:1,
        arrows:true,  
        speed: 1000,
        autoplay: true,
		autoplaySpeed: 3000,
            responsive: [   
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },                             
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]

    }); 
    $('.slideLogo').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 8000,
            autoplay: true,
            speed: 1000,
            lazyLoad: "progressive",
            rows: 2,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [   
            	{
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },                             
                {
                    breakpoint: 767,
                    settings: {
                    	rows: 1,
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },                             
                {
                    breakpoint: 640,
                    settings: {
                    	rows: 1,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                    	rows: 1,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    $('.slideGallery').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 8000,
            autoplay: true,
            speed: 1000,
            lazyLoad: "progressive",
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [   
            	{
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },                             
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 361,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    $('.vnt-gallery a[data-fancybox]').fancybox({
      baseClass: 'myFancyBox',
      thumbs: {
        autoStart: true,
        axis: 'x'
      }
    })
    $(document).on('click', '.wrap-video .icon', function(){
      $(this).parents('.wrap-video').addClass('active');      
    }); 
    autoresize();
    $(window).resize(autoresize);
    function autoresize() {
    	var ww = $('.imgMethod').width(),hw = $('.imgMethod').height();
    		el1 = document.getElementById('allNodes'),
			el2 = document.getElementById('imgBg');
    	if ($(window).width() > 480) {                                    
    		var scale_bg = hw / 407;
            $('.imgMethod').css('height', 407);     
            $('#allNodes,#imgBg').css({'left': 0,'top': 0});                         
		} else {
			var h_img = ww * 407 / 410;
	    	scale_bg = h_img / 407;
	        $('.imgMethod').css('height', ww * 407 / 410);                            
			$('#allNodes,#imgBg').css({'left': (ww - 410) / 2,'top': (h_img - 410) / 2}); 		
			el1.style.webkitTransform = ("scale(" + scale_bg + "," + scale_bg + ")"); //for safari and chrome
			el1.style.MozTransform = ("scale(" + scale_bg + "," + scale_bg + ")");//for firefox
			el1.style.msTransform = ("scale(" + scale_bg + "," + scale_bg + ")");
			el1.style.OTransform = ("scale(" + scale_bg + "," + scale_bg + ")");
			el1.style.transform = ("scale(" + scale_bg + "," + scale_bg + ")");
			el2.style.webkitTransform = ("scale(" + scale_bg + "," + scale_bg + ")"); //for safari and chrome
			el2.style.MozTransform = ("scale(" + scale_bg + "," + scale_bg + ")");//for firefox
			el2.style.msTransform = ("scale(" + scale_bg + "," + scale_bg + ")");
			el2.style.OTransform = ("scale(" + scale_bg + "," + scale_bg + ")");
			el2.style.transform = ("scale(" + scale_bg + "," + scale_bg + ")"); 
		}
    }
});	