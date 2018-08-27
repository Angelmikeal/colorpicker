var colorNum;
let score = 0;
let time = 10;
let begin = false;

$('.result').text(score);

function timer() {
    var count = setInterval(counter, 1000)
    function counter() {
        if (time === 0) {
            alert('GAME OVER ' + 'you scored: ' + score);
            begin = false;
            score = 0;
            time = 10;
            clearInterval(count);
            $('.board').css('background-color', 'rgb(255, 255, 255)')
        } else {
            $('.timer').text(time--)
        }
    }
}

$('#start').click(function (event) {
    event.preventDefault();
    if (begin === false) {
        begin = !begin;
        numSelector();
        timer();
    }
})


var numSelector = function () {
    colorNum = Math.floor(Math.random() * 5);

    $('.instruction').html(' ');

    function colorPicker() {

        if ((colorNum === 0)) {
            $('.board').css('background-color', 'rgb(0, 0, 255)')
        }
        else if ((colorNum === 1)) {
            $('.board').css('background-color', 'rgb(127, 199, 255)')
        }
        else if ((colorNum === 2)) {
            $('.board').css('background-color', 'rgb(255, 0, 0)')
        }
        else if ((colorNum === 3)) {
            $('.board').css('background-color', 'rgb(255, 255, 0)')
        }
        else if ((colorNum === 4)) {
            $('.board').css('background-color', 'rgb(0, 255, 0)')
        }

    }

    colorPicker();
}



$('.btn-primary').click(function (e) {
    e.preventDefault();
    if ((begin === true) && ($('.board').css('background-color') === 'rgb(0, 0, 255)')) {
        numSelector();
        score += 2;
        $('.timer').text(time += 1);
        $('.result').text(score);
    } else {
        score -= 3;
        $('.result').text(score);
    }
})


$('.btn-warning').click(function (e) {
    e.preventDefault();
    if ((begin === true) && ($('.board').css('background-color') === 'rgb(255, 255, 0)')) {
        numSelector();
        score += 2;
        $('.timer').text(time += 1);
        $('.result').text(score);

    } else {
        score -= 3;
        $('.result').text(score);
        numSelector();
    }
})



$('.btn-danger').click(function (e) {
    e.preventDefault();
    if ((begin === true) && ($('.board').css('background-color') === 'rgb(255, 0, 0)')) {
        numSelector();
        score += 2;
        $('.timer').text(time += 1);
        $('.result').text(score);
    } else {
        score -= 3;
        $('.result').text(score);
        numSelector();
    }
})



$('.btn-info').click(function (e) {
    e.preventDefault();
    if ((begin === true) && ($('.board').css('background-color') === 'rgb(127, 199, 255)')) {
        numSelector();
        score += 2;
        $('.timer').text(time += 1);
        $('.result').text(score);
    } else {
        score -= 3;
        $('.result').text(score);
        numSelector();
    }
})


$('.btn-success').click(function (e) {
    e.preventDefault();
    if ((begin === true) && ($('.board').css('background-color') === 'rgb(0, 255, 0)')) {
        numSelector();
        score += 2;
        $('.timer').text(time += 1);
        $('.result').text(score);
    } else {
        score -= 3;
        $('.result').text(score);
        numSelector();
    }
})

