$(function() {

	// Scroll to id
    // $("a[rel='m_PageScroll2id']").mPageScroll2id();

    // Owl Carousel

    $('#bottom_carousel').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            768 : {
                items: 2
            }
        }

    });

    // input time

    var timepicker = new TimePicker('time', {
        lang: 'en',
        theme: 'dark'
    });
    timepicker.on('change', function(evt) {

        var value = (evt.hour || '00') + ':' + (evt.minute || '00');
        evt.element.value = value;

    });

});
