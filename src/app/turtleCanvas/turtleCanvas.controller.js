angular.module('logo').controller('TurtleCanvasController', function ($scope, TurtleCanvasService) {

    $scope.redraw = TurtleCanvasService.redraw;
});