function topFunction() {
   document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}

$(document).ready(function() {

    $('#menyrad li').find('a').click(function(e){
        e.preventDefault();
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        $('html, body').animate({ scrollTop: $anchor.top }, 1500);
        return false;
    });

    $('.pil').find('a').click(function(e){
	    e.preventDefault();
	    var $href = $(this).attr('href');
	    var $anchor = $($href).offset();
	    $('html, body').animate({ scrollTop: $anchor.top }, 1500);
	    return false;
	});

})