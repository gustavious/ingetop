$(document).ready(function() {


    /*  Foundation Init    */
    $(document).foundation();



    /*  carousel Init    */
    $('#carousel').carouFredSel({
        width: '670',
        pagination: ".pagination",
        responsive: true,
        scroll: {
            fx: 'fade'
        },
        items: {
            visible: 1,
            width: '670'
        },
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });





    /*    Mean navigation menu scroll to    */
    $('#mean_nav ul li a').click(function(e) {
        e.preventDefault();
        scrollTo($(this).attr('href'), 900, 'easeInOutCubic');
    });




    $('.hero').bgswitcher({
        images: ["img/bg/1.jpg","img/bg/2.jpg","img/bg/3.jpg","img/bg/4.jpg","img/bg/5.jpg","img/bg/6.jpg","img/bg/7.jpg","img/bg/8.jpg","img/bg/9.jpg","img/bg/10.jpg","img/bg/11.jpg","img/bg/12.jpg",],
        effect: "fade",
        interval: 4000
});













    /*    Back to top button    */
    var back_top = $('#back_top');

    back_top.click(function(e) {
        e.preventDefault();
        scrollTo(0, 900, 'easeInOutCubic');

    });

    function scrollTo(target, speed, ease) {
        $(window).scrollTo(target, speed, {
            easing: ease
        });
    }

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 749) {
            back_top.stop().animate({
                opacity: 1
            }, 250);
        } else {
            back_top.stop().animate({
                opacity: 0
            }, 250);
        }
    });

});
