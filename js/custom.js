console.log('Great, it\'s working')

$('.burger').click( function() {
    console.log('Yay, it clicked!')
    $('.main-header nav').toggleClass('open');
    $('.burger').toggleClass('open');
});

// Homepage slider 
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

// Latest work gallery
var lightbox1 = new SimpleLightbox('.gallery1 a', { /* options */ });
var lightbox1 = new SimpleLightbox('.gallery2 a', { /* options */ });
var lightbox1 = new SimpleLightbox('.gallery3 a', { /* options */ });


// FAQ
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

// Customiser

var pattern ='';
var texture ='001';

function showPattern() {
    $('.pattern-display').addClass('hidden');
    $('.previews').addClass('hidden');

    $('.pattern-'+pattern).removeClass('hidden');
    $('#preview-'+pattern).removeClass('hidden');
}

function moveAccordion (openingStep) {
    $('.step:not('+openingStep+') .accordion-header').removeClass('accordion-open');   
    $('.step:not('+openingStep+') .accordion-content').slideUp();

    $(openingStep + ' .accordion-content').slideDown();
    $(openingStep + ' .accordion-header').addClass('accordion-open');

    $('.material-slider').slick('setPosition'); 
}

// Moving from step 1 to step 2
$('.step-one input').click(function() {
    pattern = $(this).val();
    showPattern();
    moveAccordion('.step-two');
});

// Back from step 2 to step 1
$('.step-one .accordion-header ').click (function() {
    event.preventDefault(); 
    showPattern();
    moveAccordion('.step-one');
});

// Moving from step 2 to step 3
$('.next').click (function() {
    event.preventDefault(); 
    showPattern();
    moveAccordion('.step-three');
});

// Back from step 3 to step 2
$('.step-two .accordion-header, .back').click (function() {
    event.preventDefault(); 
    showPattern();
    moveAccordion('.step-two');
});

// Moving from step 3 to step 4
$('.save').click (function() {
    event.preventDefault(); 
    showPattern();
    moveAccordion('.step-four');
});

// Back from step 3 to step 2
$('.step-three .accordion-header').click (function() {
    event.preventDefault(); 
    showPattern();
    moveAccordion('.step-three');
});

// Selecting material swatches 
$('.texture').click(function() {
    texture = $(this).attr('data-desc');

$('.texture').removeClass('texture-selected');
    $(this).addClass('texture-selected');
});

// Slick slider for materials
$('.material-slider').slick({
    slidesToShow: 12,
    slidesToScroll: 6,
    infinite: true,
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-left slick-prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-right slick-next" aria-hidden="true"></i>',

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        }
    ]

});

// Painting the large SVGs
$('.step-two ' + '.texturefill').click (function() {
    var group = $(this).attr('data-group');
    var groupSelector = '[data-group=' + group + ']';
    
    $('.step-two ' + groupSelector).css('fill','url(#'+pattern+texture+')');
    $('.step-three ' + groupSelector).css('fill','url(#preview'+pattern+texture+')');
});

// Highlighting the large SVGs
$('.texturefill').mouseenter (function () {
    $(this).css('opacity','0.9')
});

$('.texturefill').mouseleave (function () {
    $(this).css('opacity','1')
});

// Resetting the large SVGs
$('.reset').click (function() {
    event.preventDefault(); 
    $('.texturefill').css('fill','');
});




