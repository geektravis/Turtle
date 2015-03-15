    angular.module('logo').controller('LogoController', function ($state, $scope, commandList) {
        $scope.commands = commandList.list();
        $scope.addMove = function (distance) {
            return commandList.addMove(distance);
        };
        $scope.addLeft = function (degrees) {
            return commandList.addLeft(degrees);
        };
        $scope.addRight = function (degrees) {
            return commandList.addRight(degrees);
        };
        function dragControlListeners() {
            return {
                accept: function (sourceItemHandleScope, destSortableScope) {
                    return true;
                },
                itemMoved: function (event) {
                },
                orderChanged: function (event) {
                },
                containment: '#board'
            };
        }


    });