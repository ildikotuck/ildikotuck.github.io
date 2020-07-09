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

// $('.accordion-header').click(function() {

//     $('.accordion-content').slideDown();

//     if ( $(this).attr('data-open')) {

//         $(this).find('.accordion-content').slideUp();
//         $(this).removeAttr('data-open');
    
//     } else {
//         $('.accordion-content').slideUp();
//         $('.accordion-header').removeAttr('data-open');
//         $(this).find('.accordion-content').slideDown();
//         $(this).attr('data-open', true);
//     }

// });

var pattern ='';
var texture ='url(#stripes)';
var cursorvalue ='';
var cursorsvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="52px" height="52px" viewBox="0 0 52 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <filter x="-29.3%" y="-36.6%" width="165.9%" height="165.9%" filterUnits="objectBoundingBox" id="filter-1">
            <feOffset dx="1" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>

        <pattern id="001" patternUnits="userSpaceOnUse" width="450" height="450">
            <image href="https://ildikotuck.github.io/images/textures/001.png" x="0" y="0" width="450" height="450" />
        </pattern>
        <pattern id="002" patternUnits="userSpaceOnUse" width="450" height="450">
        <image href="https://ildikotuck.github.io/images/textures/002.png" x="0" y="0" width="450" height="450" />
        </pattern>
        <pattern id="003" patternUnits="userSpaceOnUse" width="450" height="450">
        <image href="https://ildikotuck.github.io/images/textures/003.png" x="0" y="0" width="450" height="450" />
        </pattern>
        <pattern id="004" patternUnits="userSpaceOnUse" width="450" height="450">
        <image href="https://ildikotuck.github.io/images/textures/004.png" x="0" y="0" width="450" height="450" />
        </pattern>
        <pattern id="005" patternUnits="userSpaceOnUse" width="450" height="450">
        <image href="https://ildikotuck.github.io/images/textures/005.png" x="0" y="0" width="450" height="450" />
        </pattern>
        <pattern id="006" patternUnits="userSpaceOnUse" width="450" height="450">
        <image href="https://ildikotuck.github.io/images/textures/006.png" x="0" y="0" width="450" height="450" />
        </pattern>

    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group-3" filter="url(#filter-1)" transform="translate(3.000000, 5.000000)">
            <g id="Group-2" transform="translate(8.000000, 0.000000)" fill="url(#001)" fill-rule="nonzero" stroke="#000000" stroke-width="3">
                <ellipse id="cursorswatch" cx="16.5" cy="16" rx="18" ry="17.5"></ellipse>
            </g>
            <rect id="Rectangle" fill="#000000" transform="translate(1.000000, 27.500000) rotate(-180.000000) translate(-1.000000, -27.500000) " x="0" y="14" width="2" height="27"></rect>
            <rect id="Rectangle-Copy" fill="#000000" transform="translate(14.278780, 39.991349) rotate(-90.000000) translate(-14.278780, -39.991349) " x="13.2787803" y="26.4913486" width="2" height="27"></rect>
        </g>
    </g>
</svg>`;


// radio button selection
$('.step-one input').click(function() {
    // console.log(  $(this).val()   );
    pattern = $(this).val() ;
    // console.log(pattern);

    showPattern();
});

function showPattern() {
    if (pattern === 'squares') {
        console.log(pattern);
        $('.pattern-display').addClass('hidden');
        $('.pattern-squares').removeClass('hidden');
        $('.step-two .accordion-content').slideDown();
    } else if (pattern === 'pinwheels') {
        $('.pattern-display').addClass('hidden');
        $('.pattern-pinwheels').removeClass('hidden');
        $('.step-two .accordion-content').slideDown();
    } else if (pattern === 'lines') {
        $('.pattern-display').addClass('hidden');
        $('.pattern-lines').removeClass('hidden');
        $('.step-two .accordion-content').slideDown();
    }
};

// Selecting material swatches 
$('.texture').click(function() {
    cursorvalue = $(this).attr('data-desc');
    texture = 'url(#'+$(this).attr('data-desc')+')';
    console.log(texture);
    console.log(cursorvalue);

    $('.texture').removeClass('texture-selected');
    $(this).addClass('texture-selected');
});


// Painting and highlighting the large SVGs
$('.texturefill').click (function() {
    $(this).css('fill',texture)
});

$('.texturefill').mouseenter (function () {
    $(this).css('opacity','0.9')
});

$('.texturefill').mouseleave (function () {
    $(this).css('opacity','1')
});

$('.reset').click (function() {
    $('#hor-1','#ver-1',).css('fill','#EFEFEF');
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
