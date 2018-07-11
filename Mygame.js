var colorNum;
let score = 0;
let time = 5;
let begin = false;

$('.result').text(score)


var gameStart = function () {
    begin = !begin

 var fameTime = setInterval(function () {
        time--;
        $('.timer').text(time)
        if (time <= 0) {
            alert('GAME OVER ' + 'you scored: ' + score)
            location = location
        }
    }, 1000);
}

$('#start').click(function (event) {
    event.preventDefault();
    numSelector();
    gameStart();
});



var numSelector = function () {
    colorNum = Math.floor(Math.random() * 5);

    $('.instruction').html(' ');

    function colorPicker () {

        if ((colorNum === 0)) {
            $('.board').css('background-color', 'rgb(0, 0, 255)')
        }
         else if  ((colorNum === 1)) {
            $('.board').css('background-color', 'rgb(127, 199, 255)')
        }
         else if  ((colorNum === 2)) {
            $('.board').css('background-color', 'rgb(255, 0, 0)')
        }
         else if  ((colorNum === 3)) {
            $('.board').css('background-color', 'rgb(255, 255, 0)')
        }
         else if  ((colorNum === 4)) {
            $('.board').css('background-color', 'rgb(0, 255, 0)')
        }

    }

    colorPicker();
}



$('.btn-primary').click(function (e) {
    event.preventDefault();
    if ((begin === true) && ($('.board').css('background-color') === 'rgb(0, 0, 255)')) {
        numSelector()
        score += 2
        time+=1
        $('.result').text(score)
    }  else if  ((begin === true) && ($('.board').css('background-color') !== 'rgb(0, 0, 255)')) {
        score -= 3
        $('.result').text(score);
    }
})


$('.btn-warning').click(function (e) {
    event.preventDefault();
    if ((begin === true) && ($('.board').css('background-color') === 'rgb(255, 255, 0)')) {
        numSelector()
        score += 2
        time+=1
        $('.result').text(score)
    } else if ((begin === true) && ($('.board').css('background-color') !== 'rgb(255, 255, 0)')){
        score -= 3
        $('.result').text(score);
        numSelector()
    }
})



$('.btn-danger').click(function (e) {
    event.preventDefault();
    if ((begin === true) && ($('.board').css('background-color') === 'rgb(255, 0, 0)')) {
        numSelector()
        score += 2
        time+=1
        $('.result').text(score)
    } else if ((begin === true) && ($('.board').css('background-color') !== 'rgb(255, 0, 0)')) {
        score -= 3
        $('.result').text(score);
        numSelector()
    }
})



$('.btn-info').click(function (e) {
    event.preventDefault();
    if ((begin === true) && ($('.board').css('background-color') === 'rgb(127, 199, 255)')) {
        numSelector()
        score += 2
        time+=1
        $('.result').text(score)
    } else if ((begin === true) && ($('.board').css('background-color') !== 'rgb(127, 199, 255)')) {
        score -= 3
        $('.result').text(score);
        numSelector()
    }
})


$('.btn-success').click(function (e) {
    event.preventDefault();
    if ((begin === true) && ($('.board').css('background-color') === 'rgb(0, 255, 0)')) {
        numSelector()
        score += 2
        time+=1
        $('.result').text(score)
    } else if ((begin === true) && ($('.board').css('background-color') !== 'rgb(0, 255, 0)')) {
        score -= 3
        $('.result').text(score);
        numSelector()
    }
})

