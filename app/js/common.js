$(function() {

    // Time Picker
    $('._jw-tpk-hour').text('Години');
    $('._jw-tpk-minutes').text('Хвилини');

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

    $('#time').keypress(function () {
        $value = $(this).val();

        if($value.length == 2)
            $(this).val($value + " : ");
    });

    $('#time').focus(function () {
        $(this).attr("placeholder", "");
    });

    $('#time').focusout(function () {
        $(this).attr("placeholder", "12 : 00");
    });

    // Popup

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });

});
