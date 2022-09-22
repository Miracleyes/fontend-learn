$(document).ready(function() {


    function atr() {
        console.log(this);
    }
    
    $('li').on('click', function() {
        // var currentTimes = parseInt( $(this).find('span').html() )
        // $(this).find('span').html(currentTimes + 1)



        $(this).find('span').slideToggle(300, function() {
            console.log(this);
        }.bind(this));
    })






})

