$(document).ready(function(){
    $('.slideNews').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 8000,
            autoplay: true,
            lazyLoad: "progressive",
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 980,
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
    $('.gallery-img a[data-fancybox]').fancybox({
      baseClass: 'myFancyBox',
      thumbs: {
        autoStart: true,
        axis: 'x'
      }
    })
    $('.slideVideo').slick({
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
                    breakpoint: 1365,
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
});