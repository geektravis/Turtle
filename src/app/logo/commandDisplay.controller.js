angular.module('logo').controller('CommandDisplayController', function ($scope, commandList) {
    console.log('commandDisplayController');
    $scope.deleteCommand = commandList.deleteCommand;
});