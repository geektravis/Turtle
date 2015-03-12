angular.module('logo').controller('TurtleCanvasController', function ($scope, turtleCanvasDraw, commandList) {

    $scope.redraw = function() {
        return turtleCanvasDraw.draw(commandList.list());
    };
});