var lastpos = window.pageYOffset;
var scrolld = true;
var startpoint = 150;
var endpoint = startpoint + base.offsetHeight;
document.addEventListener('scroll', function () {
	scrolld = lastpos - window.pageYOffset <= 0;
	if (scrolld && window.pageYOffset > startpoint && mask.offsetHeight < base.offsetHeight && window.pageYOffset < endpoint) {
		if (window.pageYOffset - startpoint > base.offsetHeight) {
			mask.style.height = base.offsetHeight + 'px'
		} else { 
			mask.style.height = window.pageYOffset - startpoint + 'px';
		}
		mask.style.bottom = window.innerHeight - base.offsetTop - base.offsetHeight + 'px';
		mask.style.position = 'fixed';
		
	} else if (!scrolld && window.pageYOffset <= endpoint) { 
		mask.style.bottom = window.innerHeight - base.offsetTop - base.offsetHeight + 'px';
		mask.style.top = '';
		if (window.pageYOffset - startpoint <= 0) {
			mask.style.height = 0 + 'px'
		} else { 
			mask.style.height = window.pageYOffset - startpoint + 'px';
		}
	} else if (scrolld && window.pageYOffset >= endpoint) {
		mask.style.top = base.offsetTop + 'px';
		mask.style.bottom = '';
		var h1 = window.pageYOffset - startpoint;
		if (window.pageYOffset - endpoint >= base.offsetHeight) {
			mask.style.height = 0 + 'px'
		}
		if (window.pageYOffset - startpoint > base.offsetHeight) { 
			h1 = base.offsetHeight;
		}
		mask.style.height = h1 - (window.pageYOffset - endpoint) + 'px';
		console.log('3')
	} else if (!scrolld && window.pageYOffset >= endpoint) { 
		mask.style.top = base.offsetTop + 'px';
		mask.style.bottom = '';
		if (window.pageYOffset <= endpoint) {
			mask.style.height = base.offsetHeight + 'px'
		} else { 
			mask.style.height = base.offsetHeight - (window.pageYOffset - endpoint) + 'px';
		}
	} 
	lastpos = window.pageYOffset;
})