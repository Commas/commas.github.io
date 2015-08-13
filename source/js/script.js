$(document).ready(function(){
	$( ".modal" ).load( "source/img/loader.gif" );
	$('body').attr('class','loading');
});
$(window).load(function(){
	$('body').attr('class','');
});