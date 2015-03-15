angular.module('logo').controller('CommandDisplayController', function ($scope, commandList) {
    $scope.deleteCommand = commandList.deleteCommand;
});