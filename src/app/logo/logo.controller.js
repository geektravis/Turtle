angular.module('logo').controller('LogoController', function ($state, $scope, commandList) {
    console.log('Logo controller');
    $scope.commands = commandList.list();
//    $scope.addMove = commandList.addMove;
    $scope.addMove = function(distance) {
        var command = commandList.addMove(distance);
    };
    $scope.addLeft = function(degrees) {
        return commandList.addLeft(degrees);
    };
    $scope.addRight = function(degrees) {
        return commandList.addRight(degrees);
    };


});