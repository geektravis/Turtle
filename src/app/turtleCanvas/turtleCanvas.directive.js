angular.module('logo').directive('turtleCanvas', function () {
    return {
        scope:{},
        replace:true,
        templateUrl:'turtleCanvas/turtleCanvas.directive.tpl.html'
    };
});

