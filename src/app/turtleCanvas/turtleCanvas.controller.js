angular.module('logo').controller('TurtleCanvasController', function ($scope, commandList) {

    $scope.clearCanvas = function() {
        var ctx = getContext();
        ctx.beginPath();
        $scope.currentX = 300;
        $scope.currentY = 300;
        $scope.currentHeading = 0;
        $scope.currentAngle = 0;
        var canvas = $("canvas")[0];
        ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
    };


    $scope.currentX = 300;
    $scope.currentY = 300;
    $scope.currentHeading = 0;
    $scope.currentAngle = 0;
    $scope.lineWidth = 1;
    $scope.lineColor = 'black';
    $scope.penDown = true;

    $scope.redraw = function() {
        $scope.clearCanvas();
        _.each(commandList.list(), function(command) {
           command.execute(commandModule);
        });
    };

    function getCanvas() {
        return $("canvas")[0];
    }
    function getContext() {
        return getCanvas().getContext("2d");
    }

    var commandModule = {
        left: left,
        right: right,
        move: move
    };
    function left(degrees) {
        $scope.currentHeading -= degrees;
        $scope.currentAngle = $scope.currentHeading * Math.PI / 180;
    }

    function right(degrees) {
        $scope.currentHeading += degrees;
        $scope.currentAngle = $scope.currentHeading * Math.PI / 180;
    }

    function move(distance) {
        // color
        var ctx = getContext();
        console.log(ctx);
        ctx.moveTo($scope.currentX, $scope.currentY);
        ctx.lineTo($scope.currentX + distance * Math.cos($scope.currentAngle), $scope.currentY + distance * Math.sin($scope.currentAngle));
        ctx.lineWidth = 7;
        ctx.strokeStyle = "#000";
        // draw it
        ctx.stroke();
        $scope.currentX += distance * Math.cos($scope.currentAngle);
        $scope.currentY += distance * Math.sin($scope.currentAngle);
    }
});