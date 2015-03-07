angular.module('logo').controller('LogoController', function ($state, $scope, commandList) {
    console.log('Logo controller');
    $scope.commands = commandList.list();
    $scope.addMove = commandList.addMove;
    $scope.addLeft = commandList.addLeft;
    $scope.addRight = commandList.addRight;
});