describe('logo', function () {
    beforeEach(module('common'));
    beforeEach(module('logo'));

    describe('commandList', function () {
        describe('addMove', function () {
            it("should add a move command", inject(function (commandList) {
                var move = commandList.addMove(123);

                expect(move.distance).to.equal(123);
                expect(commandList.list()[0]).to.equal(move);
                expect(commandList.list().length).to.equal(1);
            }));
        });
        describe('addLeft', function () {
            it("should add a left command", inject(function (commandList) {
                var left = commandList.addLeft(90);

                expect(left.degrees).to.equal(90);
                expect(commandList.list()[0]).to.equal(left);
                expect(commandList.list().length).to.equal(1);
            }));
        });
        describe('addRight', function () {
            it("should add a right command", inject(function (commandList) {
                var right = commandList.addRight(45);

                expect(right.degrees).to.equal(45);
                expect(commandList.list()[0]).to.equal(right);
                expect(commandList.list().length).to.equal(1);
            }));
        });
        describe('deleteCommand', function () {
            it("should delete a  command", inject(function (commandList) {
                var right = commandList.addRight(45);
                var move = commandList.addMove(123);
                var left = commandList.addLeft(90);
                var move2 = commandList.addMove(234);

                commandList.deleteCommand(2);
                expect(commandList.list().length).to.equal(3);
                expect(commandList.list()[0]).to.equal(right);
                expect(commandList.list()[1]).to.equal(move);
                expect(commandList.list()[2]).to.equal(move2);


            }));
        });

    });
});