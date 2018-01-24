$('#voltar').on('click',function(event){
	$('html').animate({ scrollTop: 0 }, 'slow');
});


$(window).load(function() {
	$('.tooltip').tooltipster();
});
