angular.module('logo').factory('TurtleCanvasService', function (commandList) {

    var currentX = 300;
    var currentY = 300;
    var currentHeading = 0;
    var currentAngle = 0;
    var lineWidth = 1;
    var lineColor = 'black';
    var penDown = true;
    var commandModule = {
        left: left,
        right: right,
        move: move
    };

    var service = {
        redraw: redraw
    };
    return service;

    function clearCanvas() {
        var ctx = getContext();
        ctx.beginPath();
        currentX = 300;
        currentY = 300;
        currentHeading = 0;
        currentAngle = 0;
        var canvas = $("canvas")[0];
        ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
    }



    function redraw() {
        clearCanvas();
        _.each(commandList.list(), function(command) {
            command.execute(commandModule);
        });
    }

    function getCanvas() {
        return $("canvas")[0];
    }
    function getContext() {
        return getCanvas().getContext("2d");
    }

    function left(degrees) {
        currentHeading -= degrees;
        currentAngle = currentHeading * Math.PI / 180;
    }

    function right(degrees) {
        currentHeading += degrees;
        currentAngle = currentHeading * Math.PI / 180;
    }

    function move(distance) {
        // color
        var ctx = getContext();
        console.log(ctx);
        ctx.moveTo(currentX, currentY);
        ctx.lineTo(currentX + distance * Math.cos(currentAngle), currentY + distance * Math.sin(currentAngle));
        ctx.lineWidth = 7;
        ctx.strokeStyle = "#000";
        // draw it
        ctx.stroke();
        currentX += distance * Math.cos(currentAngle);
        currentY += distance * Math.sin(currentAngle);
    }
});