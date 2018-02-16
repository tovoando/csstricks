$(document).ready(function(){
	var random = 1 + Math.floor(Math.random() * 4);
	$('#backImage').css('background-image', 'url(assets/img/background' + random + '.jpg)');
	$('#backImage').css('height', '650px');
});