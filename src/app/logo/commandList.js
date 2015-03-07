angular.module('logo').factory('commandList', function(commandFactory) {
  console.log('commandListFactoryFactory');
  return {
    commands: [],
    list: function() {
      return this.commands;
    },
      addMove: function(distance) {
          console.log('addMove');

          this.commands.push(commandFactory.moveFactory(distance));
      },
      addLeft: function(degrees) {
          this.commands.push(commandFactory.leftFactory(degrees));
      },
      addRight: function(degrees) {
          this.commands.push(commandFactory.rightFactory(degrees));
      }
  };
});