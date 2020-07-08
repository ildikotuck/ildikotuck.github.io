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
var cursorvalue ='';

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
    cursorvalue = $(this).attr('data-desc');
    texture = 'url(#'+$(this).attr('data-desc')+')';
    console.log(texture);
    $('.texture').removeClass('texture-selected');
    $(this).addClass('texture-selected');

});

$('.texturefill').click (function() {
    $(this).css('fill',texture)
});

$('svg').hover (function () {
    $('svg').css('cursor',`url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='52px' height='52px' viewBox='0 0 52 52' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cfilter x='-29.3%25' y='-36.6%25' width='165.9%25' height='165.9%25' filterUnits='objectBoundingBox' id='filter-1'%3E%3CfeOffset dx='1' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3E%3C/feOffset%3E%3CfeGaussianBlur stdDeviation='2' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3E%3C/feGaussianBlur%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1'%3E%3C/feColorMatrix%3E%3CfeMerge%3E%3CfeMergeNode in='shadowMatrixOuter1'%3E%3C/feMergeNode%3E%3CfeMergeNode in='SourceGraphic'%3E%3C/feMergeNode%3E%3C/feMerge%3E%3C/filter%3E%3Cpattern id='001' patternUnits='userSpaceOnUse' width='450' height='450'%3E%3Cimage href='https://ildikotuck.github.io/images/textures/001.png' x='0' y='0' width='450' height='450' /%3E%3C/pattern%3E%3Cpattern id='002' patternUnits='userSpaceOnUse' width='450' height='450'%3E%3Cimage href='https://ildikotuck.github.io/images/textures/002.png' x='0' y='0' width='450' height='450' /%3E%3C/pattern%3E%3Cpattern id='003' patternUnits='userSpaceOnUse' width='450' height='450'%3E%3Cimage href='https://ildikotuck.github.io/images/textures/003.png' x='0' y='0' width='450' height='450' /%3E%3C/pattern%3E%3Cpattern id='004' patternUnits='userSpaceOnUse' width='450' height='450'%3E%3Cimage href='https://ildikotuck.github.io/images/textures/004.png' x='0' y='0' width='450' height='450' /%3E%3C/pattern%3E%3Cpattern id='005' patternUnits='userSpaceOnUse' width='450' height='450'%3E%3Cimage href='https://ildikotuck.github.io/images/textures/005.png' x='0' y='0' width='450' height='450' /%3E%3C/pattern%3E%3Cpattern id='006' patternUnits='userSpaceOnUse' width='450' height='450'%3E%3Cimage href='https://ildikotuck.github.io/images/textures/006.png' x='0' y='0' width='450' height='450' /%3E%3C/pattern%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Group-3' filter='url(%23filter-1)' transform='translate(3.000000, 5.000000)'%3E%3Cg id='Group-2' transform='translate(8.000000, 0.000000)' fill=${texture}fill-rule='nonzero' stroke='%23000000' stroke-width='3'%3E%3Cellipse id='cursorswatch' cx='16.5' cy='16' rx='18' ry='17.5'%3E%3C/ellipse%3E%3C/g%3E%3Crect id='Rectangle' fill='%23000000' transform='translate(1.000000, 27.500000) rotate(-180.000000) translate(-1.000000, -27.500000) ' x='0' y='14' width='2' height='27'%3E%3C/rect%3E%3Crect id='Rectangle-Copy' fill='%23000000' transform='translate(14.278780, 39.991349) rotate(-90.000000) translate(-14.278780, -39.991349) ' x='13.2787803' y='26.4913486' width='2' height='27'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), auto;`)
});

// lines

// $('path.light').click (function() {
//     $('.light').css('fill',texture)
// });

// $('path.medium').click (function() {
//     $('.medium').css('fill',texture)
// });

// $('path.dark').click (function() {
//     $('.dark').css('fill',texture)
// });

// $('path.darkest').click (function() {
//     $('.darkest').css('fill',texture)
// });

// // pinwheels

// $('path.pwheel1').click (function() {
//     $('.pwheel1').css('fill',texture)
// });

// $('path.pwheel2').click (function() {
//     $('.pwheel2').css('fill',texture)
//     $('.pwheel2').addClass('path-selected')



// });

// $('path.pwheel3').click (function() {
//     $('.pwheel3').css('fill',texture)
// });

// $('path.pwheel4').click (function() {
//     $('.pwheel4').css('fill',texture)
// });

// $('path.pwheel5').click (function() {
//     $('.pwheel5').css('fill',texture)
// });

// $('path.pwheel6').click (function() {
//     $('.pwheel6').css('fill',texture)
// });

// $('path.pwheel7').click (function() {
//     $('.pwheel7').css('fill',texture)
// });

// $('path.pwheel8').click (function() {
//     $('.pwheel8').css('fill',texture)
// });

// $('path.dark').click (function() {
//     $('.dark').css('fill',texture)
// });



// // squares 

// $('path.dark').click (function() {
//     $('.dark').css('fill',texture)
// });

// $('path.light').click (function() {
//     $('.light').css('fill',texture)
// });

// $('.bg').click (function() {
//     $('.bg').css('fill',texture)
// });
