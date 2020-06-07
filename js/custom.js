console.log('Great, it\'s working')

document.querySelector('.burger').addEventListener('click', function() {

    console.log('Yay, it clicked!')

    document.querySelector('.main-header nav').classList.toggle('open')
    document.querySelector('.burger').classList.toggle('open')


} );
    