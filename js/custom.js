console.log('Great, it\'s working')

document.querySelector('.burger').addEventListener('click', function() {

    console.log('Yay, it clicked!')

    document.querySelector('.main-header nav').classList.toggle('open')
    document.querySelector('.burger').classList.toggle('open')


});
    
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