$(document).ready(function(){
	$('<img/>').attr('src', 'source/img/loader.gif').load(function() {
   		$(this).remove();
		$('.modal').css('background-image', 'url(source/img/loader.gif)');
		$('body').attr('class','loading');
		$(window).load(function(){
			$('body').attr('class','');
		});
	});
});