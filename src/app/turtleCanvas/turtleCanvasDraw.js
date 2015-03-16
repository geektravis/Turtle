angular.module('logo').factory('turtleCanvasDraw', function (commandList) {

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
        draw: draw,
        getStatus: getStatus,
        clear: clear
    };
    return service;

    function getStatus() {
        return {
            currentX: currentX,
            currentY: currentY,
            currentAngle: currentAngle,
            currentHeading: currentHeading,
            lineWidth: lineWidth,
            lineColor: lineColor,
            penDown: penDown
        };
    }

    function clear() {
        currentX = 300;
        currentY = 300;
        currentHeading = 0;
        currentAngle = 0;
        var ctx = getContext();
        if (ctx) {
            ctx.beginPath();
            var canvas = $("canvas")[0];
            ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
        }
    }



    function draw(commands) {
        clear();
        _.each(commands, function(command) {
            command.execute(commandModule);
        });
    }

    function getCanvas() {
        return $("canvas")[0];
    }
    function getTurtleSprite() {
        return $("#turtleSprite")[0];
    }
    function getContext() {
        if (getCanvas()) {
            return getCanvas().getContext("2d");
        }
    }

    function left(degrees) {
        currentHeading -= parseFloat(degrees);
        currentAngle = currentHeading * Math.PI / 180;
    }

    function right(degrees) {
        currentHeading += parseFloat(degrees);
        currentAngle = currentHeading * Math.PI / 180;
    }

    function move(distance) {
        // color
        var ctx = getContext();
        if (ctx) {
            ctx.moveTo(currentX, currentY);
            ctx.lineTo(currentX + distance * Math.cos(currentAngle), currentY + distance * Math.sin(currentAngle));
            ctx.lineWidth = 7;
            ctx.strokeStyle = "#000";
            // draw it
            ctx.stroke();
        }
        var turtle = getTurtleSprite();
        currentX += distance * Math.cos(currentAngle);
        currentY += distance * Math.sin(currentAngle);
        if (turtle) {
            console.log('found the turtle', turtle.style);
            turtle.style.top = currentY + 'px';
            turtle.style.left = (currentX - 25) + 'px';
        }
    }
});