angular.module('logo').factory('commandFactory', function() {
    var factory = {
        moveFactory: moveFactory,
        leftFactory: leftFactory,
        rightFactory: rightFactory
    };

    var command = {
        execute: function() {
            alert('executing ' + this.name);
        }
    };

    var moveCommand = _.create(command, {
        name: 'move',
        execute: function() {
            alert('moving ' + this.distance);
        }
    });

    var leftCommand = _.create(command, {
        name: 'left',
        execute: function() {
            alert('turning left ' + this.degrees);
        }
    });

    var rightCommand = _.create(command, {
        name: 'right',
        execute: function() {
            alert('turning right ' + this.degrees);
        }
    });

    return factory;

    function moveFactory(distance) {
        console.log('moveFactory');
        return _.create(moveCommand, {distance: distance});
    }

    function leftFactory(degrees) {
        return _.create(leftCommand, {degrees: degrees});
    }

    function rightFactory(degrees) {
        return _.create(rightCommand, {degrees: degrees});
    }


  });

