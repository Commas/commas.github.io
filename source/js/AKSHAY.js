function AKSHAY(){
	var akshayhome = ['url(http://commas.xyz/source/img/akshay/akshay19.JPG)','url(http://commas.xyz/source/img/akshay/akshay27.JPG)','url(http://commas.xyz/source/img/akshay/akshay28.JPG)','url(http://commas.xyz/source/img/akshay/akshay22.JPG)','url(http://commas.xyz/source/img/akshay/akshay01.JPG)','url(http://commas.xyz/source/img/akshay/akshay03.JPG)','url(http://commas.xyz/source/img/akshay/akshay05.JPG)','url(http://commas.xyz/source/img/akshay/akshay07.JPG)','url(http://commas.xyz/source/img/akshay/akshay09.JPG)','url(http://commas.xyz/source/img/akshay/akshay15.JPG)','url(http://commas.xyz/source/img/akshay/akshay21.JPG)','url(http://commas.xyz/source/img/akshay/akshay23.JPG)','url(http://commas.xyz/source/img/akshay/akshay24.JPG)','url(http://commas.xyz/source/img/akshay/akshay26.JPG)'];
	var r = Math.floor(Math.random() * akshayhome.length);
	$('header').css({'background-image':'url(source/img/akshay/akshay' + ("0" + r).slice(-2) + '.JPG)'});
	$('.responsive-headline').text("AKSHAY!");
	$('#desc').text("I am the apotheosized FIFTH COMMA");
	$('img').each(function(){
		r = Math.floor((Math.random() * 28) + 1);
		$(this).attr('src', 'source/img/akshay/akshay' + ("0" + r).slice(-2) + '.JPG');
	});
}