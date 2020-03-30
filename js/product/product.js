$(document).ready(function(){ 
    $('#vnt-thumbnail-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: false,
          asNavFor: '#vnt-thumbnail-nav',
          fade: true
        });
    if ($('#vnt-thumbnail-nav').find(".item").length <= 1) {
      $('#vnt-thumbnail-nav').hide();
    }
    $("#vnt-thumbnail-nav").slick({
        slidesToShow:4,
        slidesToScroll:1,
        asNavFor:"#vnt-thumbnail-for",
        focusOnSelect: true,
        arrows:false,  
        speed: 1000,
        responsive: [    
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },            
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                }
            ]     
    });        
    autoresize();
    $(window).resize(autoresize);

    function autoresize() {     
        var h1=$(".vnt-detail-page .gal-items .product-heading").outerHeight(),
        h2=$(".vnt-detail-page .gal-items .thumnails").outerHeight(),
        h=$(".vnt-detail-page #vnt-thumbnail-for").height();
        $(".vnt-detail-page .gal-items .prod-des").css('height',h-h1-h2-65);
    }    
    $(".menuFix a[href^='#']").click(function(){
      $(".menuFix li").removeClass('current');
      $(this).parent().addClass('current');
    });
    var off=$(".vnt-detail-page").offset(),
        off1=$(".otherItems").offset();
    $(window).scroll(function(){
        var $winOffset=$(window).scrollTop();
        if($winOffset > off.top&&$winOffset < off1.top - item.outerHeight()/2){
            $(".menuFix").addClass("show");
        }
        else{
            $(".menuFix").removeClass("show");
        }
        $('.boxProduct .boxContent').each(function(i) {
                if (($(this).position().top - 90) <= $winOffset) {
                        $('.menuFix li.current').removeClass('current');
                        $('.menuFix li').eq(i).addClass('current');
                }
        });        
    });     
    $('.slideSolution').slick({
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
                    breakpoint: 1100,
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