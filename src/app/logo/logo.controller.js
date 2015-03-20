    angular.module('logo').controller('LogoController', function ($state, $scope, commandList, turtleCanvasDraw) {
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
        $scope.testMe = function() {
            console.log('testme!');
        };
        $scope.orient = turtleCanvasDraw.orient;
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