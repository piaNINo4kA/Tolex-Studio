
$(function () {
	var elWrap = $('#slider4'),
		el =  elWrap.find('div'),
		indexImg = 1,
		indexMax = el.length,
		phase = 3000;

	function change () {
		el.fadeOut(500);
		el.filter(':nth-child('+indexImg+')').fadeIn(500);
	}	
		
	function autoCange () {	
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}			
		change ();
	}	

	var interval = setInterval(autoCange, phase);

	elWrap.mouseover(function() {
		clearInterval(interval);
	});
	elWrap.mouseout(function() {
		interval = setInterval(autoCange, phase);
	});
	
	elWrap.append('<span></span><span></span>');
	var	btnNext = $('span'),
		btnPrev = $('span');
		
	btnNext.click(function() {
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}
		change ();
	});
	btnPrev.click(function() {
		indexImg--;
		if(indexImg < 1) {
			indexImg = indexMax;
		}
		change ();
	});	
});
