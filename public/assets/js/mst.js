var urlPath = document.location.pathname;
var hFile = (urlPath.indexOf('admin') !== -1) ? 'admin' : 'client';
/*jQuery(function ($) {
	$.get('/'+hFile+'.html', function(data){
    	$('head').append(data);
	});
});*/
var bLink = document.createElement('script');
bLink.src = '/static/js/' + hFile + '.bundle.js';
document.head.appendChild(bLink);