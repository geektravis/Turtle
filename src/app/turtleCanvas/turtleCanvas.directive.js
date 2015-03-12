angular.module('logo').directive('turtleCanvas', function () {
    return {
        scope:{},
        replace:true,
        controller: 'TurtleCanvasController',
        templateUrl:'turtleCanvas/turtleCanvas.directive.tpl.html'
    };
});

