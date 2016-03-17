$(function() {
    var SERVER = "127.0.0.1:3000";

    $('.move').on('click', 'span', function(e) {
        var moveDirection = getMoveDirection(e.target);
        $.post(SERVER + '/move', getCommand(moveDirection), function success() {

        })
    })

    $('.rotate').on('click', 'span', function(e) {
        var rotateDirection = getRotateDirection(e.target);
        $.post(SERVER + '/rotate', getCommand(rotateDirection), function success() {

        })
    })

    function getMoveDirection(target) {

    }

    function getRotateDirection(target) {

    }

    function getCommand(direction) {

    }
})