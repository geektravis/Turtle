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
        clear: clear,
        orient: orient
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
        orient();
        move(0);
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
        console.log('turning left ', degrees, 'from ', currentHeading);
        currentHeading = (360 + currentHeading - parseFloat(degrees)) % 360;
        currentAngle = currentHeading * Math.PI / 180;
        console.log('turned left ', degrees, ' to ', currentHeading);
        orient();
    }

    function right(degrees) {
        currentHeading = (360 + currentHeading + parseFloat(degrees)) % 360;
        currentAngle = currentHeading * Math.PI / 180;
        orient();
    }

    function orient(degrees) {
        degrees = degrees || 0;
        var turtle = getTurtleSprite();
        console.log('orienting to: ', currentHeading + degrees);
        if (turtle) {
            turtle.style.transform = 'rotate(' + (currentHeading + degrees) + 'deg)';
            turtle.style['-webkit-transform'] = 'rotate(' + (currentHeading + degrees) + 'deg)';
        }
    }

    function move(distance) {
        // color
        console.log(getStatus);
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
            turtle.style.top = (currentY -25) + 'px';
            turtle.style.left = (currentX - 25) + 'px';
        }
    }
});