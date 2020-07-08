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

var lightbox1 = new SimpleLightbox('.gallery1 a', { /* options */ });
var lightbox1 = new SimpleLightbox('.gallery2 a', { /* options */ });
var lightbox1 = new SimpleLightbox('.gallery3 a', { /* options */ });



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

$('.accordion-header').click(function() {

    $('.accordion-content').slideUp();

    if ( $(this).attr('data-open')) {

        $(this).find('.accordion-content').slideUp();
        $(this).removeAttr('data-open');
    
    } else {
        $('.accordion-content').slideUp();
        $('.accordion-header').removeAttr('data-open');
        $(this).find('.accordion-content').slideDown();
        $(this).attr('data-open', true);
    }

});

var pattern ='';
var texture ='';

$('.step-one input').click(function() {
    // console.log(  $(this).val()   );
    pattern = $(this).val() ;
    console.log(pattern);
});

function showPattern() {
    if (pattern === 'squares') {
        $('#squares').css('display','block');
    
    } else if (pattern === 'pinwheels') {
        $('#pinwheels').css('display','block');

    } else {
        $('#lines').css('display','block');
    }
};

showPattern();


$('.texture').click(function() {
    texture = 'url(#'+$(this).attr('data-desc')+')';
    console.log(texture);
});

// lines

$('path.lightest').click (function() {
    $('.lightest').css('fill',texture)
});

$('path.light').click (function() {
    $('.light').css('fill',texture)
});

$('path.medium').click (function() {
    $('.medium').css('fill',texture)
});

$('path.dark').click (function() {
    $('.dark').css('fill',texture)
});

$('path.darkest').click (function() {
    $('.darkest').css('fill',texture)
});

// pinwheels

$('path.pwheel1').click (function() {
    $('.pwheel1').css('fill',texture)
});

$('path.pwheel2').click (function() {
    $('.pwheel2').css('fill',texture)
    $('.pwheel2').addClass('path-selected')



});

$('path.pwheel3').click (function() {
    $('.pwheel3').css('fill',texture)
});

$('path.pwheel4').click (function() {
    $('.pwheel4').css('fill',texture)
});

$('path.pwheel5').click (function() {
    $('.pwheel5').css('fill',texture)
});

$('path.pwheel6').click (function() {
    $('.pwheel6').css('fill',texture)
});

$('path.pwheel7').click (function() {
    $('.pwheel7').css('fill',texture)
});

$('path.pwheel8').click (function() {
    $('.pwheel8').css('fill',texture)
});

$('path.dark').click (function() {
    $('.dark').css('fill',texture)
});



// squares 

$('path.dark').click (function() {
    $('.dark').css('fill',texture)
});

$('path.light').click (function() {
    $('.light').css('fill',texture)
});

$('.bg').click (function() {
    $('.bg').css('fill',texture)
});
