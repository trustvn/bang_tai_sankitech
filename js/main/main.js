$( window ).load( function()
{         
  var loader = $('.loadicon');  
  loader.addClass("loader");setTimeout(function(){loader.addClass("show")},500);
  setTimeout(function(){loader.fadeOut(500,"linear",function(){$(this).removeClass("loader"),loader.removeClass("show")});},1200);
  setTimeout( function() {  
    loader.parents('#vnt-loading').find('.background').addClass("off");
  }, 2000);
}); 
$(document).ready(function () {
    $("#vnt-slide-home").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        //pauseOnHover:false,
        //pauseOnFocus:false,
        speed: 1000,
        autoplaySpeed: 30000000,
        fade: true
    });  
    var $slickElement = $('.slideshow');

    $slickElement.each(function () {
      var slidesRow = $(this).find('.slide-tools'),
      slideControls = $(this).find('.slide-controls');

      slidesRow.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          var $status = $slickElement.find('.pagingInfo');
          $status.html("<b>" + i + "</b>" + '/' + slick.slideCount);
      });
      if (slidesRow.is('.sliding-items')) {
        slidesRow.slick({
          slidesToShow:1,
          slidesToScroll:1,
          asNavFor:"#vnt-thumbnail-nav",
          appendArrows: slideControls,
          prevArrow:'<button type="button" data-role="none" class="slick-arrow slick-prev">Previous</button>',
          nextArrow:'<button type="button" data-role="none" class="slick-arrow slick-next">Next</button>',      
          arrows: true,
          fade: true
        });
      }      
    });    
    if ($('#vnt-thumbnail-nav').find(".item").length <= 1) {
      $('#vnt-thumbnail-nav').hide();
    }
    $("#vnt-thumbnail-nav").slick({
        slidesToShow:3,
        slidesToScroll:1,
        asNavFor:"#vnt-thumbnail-for",
        focusOnSelect: true,
        arrows:false,
        centerMode: true,
        centerPadding: "0px"
    });    
    $(document).on('click', '.wrap-video .icon', function(){
      $(this).parents('.wrap-video').addClass('active');      
    });   
    //Content product
    var content = $('.boxProduct .caption').html();
    $('#content-product .contentWrap').html(content);
    $('#vnt-thumbnail-for').on('afterChange', function(event, slick, currentSlide){ 
        var content = $('#vnt-thumbnail-for .slick-current .caption').html();  
        $(this).parents('.boxProduct').find('#content-product .contentWrap').fadeIn().html(content);
    });
});