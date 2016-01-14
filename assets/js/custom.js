$(document).ready(function(){
	$('.secondary-video').delay(500).fadeIn();
	
	$('#replay-vid').click(function(){
		var vid = $('#bgvid').get(0);
		vid.currentTime = '0';
		vid.play();
	});
});