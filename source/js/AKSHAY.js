function AKSHAY(){
	$('.responsive-headline').text("AKSHAY!");
	$('#desc').text("I am the apotheosized FIFTH COMMA");
	$('img').each(function(){
		var r = Math.floor((Math.random() * 28) + 1);
		$(this).attr('src', 'source/img/akshay/akshay' + ("0" + r).slice(-2) + '.JPG')
	});
}