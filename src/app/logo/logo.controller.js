angular.module('logo').controller('LogoController', function ($state, $scope, commandList) {
    console.log('Logo controller');
    $scope.commands = commandList.list();
//    $scope.addMove = commandList.addMove;
    $scope.addMove = function(distance) {
        commandList.addMove(distance);
        move(20);
    };
    $scope.addLeft = commandList.addLeft;
    $scope.addRight = commandList.addRight;

    $scope.currentX = 300;
    $scope.currentY = 300;
    $scope.currentHeading = 0;
    $scope.lineWidth = 1;
    $scope.lineColor = 'black';
    $scope.penDown = true;

    function test() {
        console.log('test from turtleCanvas');
    }

    function move(distance) {
        var ctx  = $("canvas")[0].getContext("2d");
        console.log(ctx);
        ctx.moveTo($scope.currentX, $scope.currentY);
        // to
        ctx.lineTo($scope.currentX + distance, $scope.currentY);
        // color
        console.log('drawing from ', $scope.currentX, $scope.currentY, ' to ', $scope.currentX + distance, $scope.currentY);
        ctx.lineWidth = 7;
        ctx.strokeStyle = "#000";
        // draw it
        ctx.stroke();
        $scope.currentX += distance;
    }
});