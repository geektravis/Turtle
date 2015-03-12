angular.module('logo').controller('TurtleCanvasController', function ($scope, turtleCanvasDraw, commandList) {

    $scope.redraw = function() {
        return turtleCanvasDraw(commandList.list());
    };
});