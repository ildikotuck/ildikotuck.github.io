console.log('Great, it\'s working')

// document.querySelector('.burger').addEventListener('click', function() {

//     console.log('Yay, it clicked!')

//     document.querySelector('.main-header nav').classList.toggle('open')
//     document.querySelector('.burger').classList.toggle('open')

$('.burger').click( function() {
    console.log('Yay, it clicked!')
    $('.main-header nav').toggleClass('open');
    $('.burger').toggleClass('open');

});

// });
    
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    fade: true,
    speed: 1200,
    cssEase: 'linear',
    arrows: false,
    // prevArrow: '<i class="fa fa-chevron-left slick-prev" aria-hidden="true"></i>',
    // nextArrow: '<i class="fa fa-chevron-right slick-next" aria-hidden="true"></i>',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
});

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });



$('.question').click(function() {

    $('.answer').slideUp();

    if ( $(this).attr('data-open')) {

        $(this).find('.answer').slideUp();
        $(this).removeAttr('data-open');
    
    } else {
        $('.answer').slideUp();
        $('.question').removeAttr('data-open');
        $(this).find('.answer').slideDown();
        $(this).attr('data-open', true);
    }

});