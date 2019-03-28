$(document).ready(function() {
	let stt = 0;
	let starimg = $('img.slide:first').attr('stt');
	let endimg = $('img.slide:last').attr('stt');
	$('img.slide').each(function(){ //lặp qua từng phần tử
		if($(this).is(':visible')) //this đại diện cho mỗi phần tử nó đi qua, mỗi slide chạy qua.
			stt = $(this).attr('stt');
	});
	$('#next').click(function() {
		/* Act on the event */
		if (stt == endimg) {
			stt = -1;
		}
		next = ++stt;
		$('img.slide').hide();
		$('img.slide').eq(next).show(); 
	});
	$('#prev').click(function() {
		/* Act on the event */
		if (stt == starimg) {
			stt = endimg;
			prev = stt++;
		}
		prev = --stt;
		$('img.slide').hide();
		$('img.slide').eq(prev).show();
	});
	//autoplay slideshow
	setInterval(function(){
		$('#next').click();
	}, 3000);
	
});