angular.module('logo').factory('commandList', function(commandFactory) {
  console.log('commandListFactoryFactory');
  return {
    commands: [],
    list: function() {
      return this.commands;
    },
      addMove: function(distance) {
          console.log('addMove');
          var command = commandFactory.moveFactory(distance);
          this.commands.push(command);
          return command;
      },
      addLeft: function(degrees) {
          var command = commandFactory.leftFactory(degrees);
          this.commands.push(command);
          return command;
      },
      addRight: function(degrees) {
          var command = commandFactory.rightFactory(degrees);
          this.commands.push(command);
          return command;
      }
  };
});