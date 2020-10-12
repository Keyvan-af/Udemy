//Key PRESS
$('input').eq(0).keypress(function (event) {
    if (event.which === 13) {
        $('h3').toggleClass('turnBlue');
    }
})

//on()
$('h1').on('mouseenter',function () {
    $(this).toggleClass('turnRed');
})

//Animation effect!
$('input').eq(1).on('click', function (){
    $('.container').fadeOut(4000) //slideup
})
//Category Effect for Animations
