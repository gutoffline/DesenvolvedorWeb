$('#voltar').on('click',function(event){
	$('html').animate({ scrollTop: 0 }, 'slow');
});


$(window).load(function() {
    $('#slider').nivoSlider({
        prevText: 'Anterior',
        nextText: 'Pr&Oacuteximo'
    });

    $('.tooltip').tooltipster();
    
    $('.lista-pizzas').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      //fade: true,
      //cssEase: 'linear'
    });

});
