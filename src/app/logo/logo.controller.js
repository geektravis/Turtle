    angular.module('logo').controller('LogoController', function ($state, $scope, commandList, turtleCanvasDraw) {
        $scope.commands = commandList.list();
        $scope.addMove = function (distance) {
            var command = commandList.addMove(distance);
            turtleCanvasDraw.draw(commandList.list());
            return command;

        };
        $scope.addLeft = function (degrees) {
            var command = commandList.addLeft(degrees);
            turtleCanvasDraw.draw(commandList.list());
            return command;
        };
        $scope.addRight = function (degrees) {
            var command = commandList.addRight(degrees);
            turtleCanvasDraw.draw(commandList.list());
            return command;
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