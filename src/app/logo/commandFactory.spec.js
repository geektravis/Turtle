describe('logo', function () {
    beforeEach(module('common'));
    beforeEach(module('logo'));


    describe('commandFactory', function () {
        describe('moveFactory', function () {
            it('should return a move command', inject(function (commandFactory) {
                var command = commandFactory.moveFactory(123);
                expect(command.name).to.equal('move');
                expect(command.distance).to.equal(123);
            }));
        });
        describe('leftFactory', function () {
            it('should return a left command', inject(function (commandFactory) {
                var command = commandFactory.leftFactory(45);
                expect(command.name).to.equal('left');
                expect(command.degrees).to.equal(45);
            }));
        });
        describe('rightFactory', function () {
            it('should return a right command', inject(function (commandFactory) {
                var command = commandFactory.rightFactory(90);
                expect(command.name).to.equal('right');
                expect(command.degrees).to.equal(90);
            }));
        });

    });
});