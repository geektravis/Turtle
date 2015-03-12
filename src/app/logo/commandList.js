angular.module('logo').factory('commandList', function (commandFactory) {
    console.log('commandListFactoryFactory');

    var commands = [];

    return {
        list: function () {
            return commands;
        },
        addMove: function (distance) {
            console.log('addMove');
            var command = commandFactory.moveFactory(distance);
            commands.push(command);
            return command;
        },
        addLeft: function (degrees) {
            var command = commandFactory.leftFactory(degrees);
            commands.push(command);
            return command;
        },
        addRight: function (degrees) {
            var command = commandFactory.rightFactory(degrees);
            commands.push(command);
            return command;
        }
    };
});