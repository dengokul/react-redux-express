import $ from 'jquery'

export function getBgImageFunc() {
	$('[data-bg-img]').each(function() {
        $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
    });
}