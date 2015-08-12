function AKSHAY(){
	$('.responsive-headline').text("AKSHAY!");
	$('#desc').text("I am the apotheosized FIFTH COMMA");
	var img = $('img');
	for(var i = 0; i < img.length; i++){
		var r = Math.floor((Math.random() * 28) + 1);
		img[i].attr('src', 'source/img/akshay/akshay' + ("0" + r).slice(-2) + '.JPG')
	}
}