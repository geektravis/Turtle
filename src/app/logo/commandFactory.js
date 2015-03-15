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
        execute: function(turtle) {
            turtle.move(this.distance);
        },
        display: function() {
            return this.distance;
        }
    });

    var leftCommand = _.create(command, {
        name: 'left',
        execute: function(turtle) {
            turtle.left(this.degrees);
        },
        display: function() {
            return this.degrees;
        }

    });

    var rightCommand = _.create(command, {
        name: 'right',
        execute: function(turtle) {
            turtle.right(this.degrees);
        },
        display: function() {
            return this.degrees;
        }

    });

    return factory;

    function moveFactory(distance) {
        return _.create(moveCommand, {distance: distance});
    }

    function leftFactory(degrees) {
        return _.create(leftCommand, {degrees: degrees});
    }

    function rightFactory(degrees) {
        return _.create(rightCommand, {degrees: degrees});
    }


  });

