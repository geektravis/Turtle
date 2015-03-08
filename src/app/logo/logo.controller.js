angular.module('logo').controller('LogoController', function ($state, $scope, commandList) {
    console.log('Logo controller');
    $scope.commands = commandList.list();
//    $scope.addMove = commandList.addMove;
    $scope.addMove = function(distance) {
        commandList.addMove(distance);
        move(20);
    };
    $scope.addLeft = function(degrees) {
        commandList.addLeft(degrees);
        $scope.currentHeading -= 30;
        $scope.currentAngle = $scope.currentHeading * Math.PI / 180;
    };
    $scope.addRight = function(degrees) {
        commandList.addRight(degrees);
        $scope.currentHeading += 30;
        $scope.currentAngle = $scope.currentHeading * Math.PI / 180;
    };

    $scope.currentX = 300;
    $scope.currentY = 300;
    $scope.currentHeading = 0;
    $scope.currentAngle = 0;
    $scope.lineWidth = 1;
    $scope.lineColor = 'black';
    $scope.penDown = true;

    function test() {
        console.log('test from turtleCanvas');
    }

    function move(distance) {
        // color
        var ctx  = $("canvas")[0].getContext("2d");
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