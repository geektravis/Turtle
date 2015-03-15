describe('logo', function () {
    beforeEach(module('common'));
    beforeEach(module('logo'));


    describe('turtleCanvasDraw', function () {
        describe('move', function () {
            it('should move current position east with the default setting', inject(function (turtleCanvasDraw, commandFactory) {
                var startStatus = turtleCanvasDraw.getStatus();
                var move = commandFactory.moveFactory(100);
                turtleCanvasDraw.clear();
                turtleCanvasDraw.draw([move]);
                var endStatus = turtleCanvasDraw.getStatus();
                expect(endStatus.currentX).to.equal(startStatus.currentX + 100);
                expect(endStatus.currentY).to.equal(startStatus.currentY);
            }));
        });

        describe('left', function () {
            it('should move current position north after a left command', inject(function (turtleCanvasDraw, commandFactory) {
                var startStatus = turtleCanvasDraw.getStatus();
                var left = commandFactory.leftFactory(90);
                var move = commandFactory.moveFactory(100);
                turtleCanvasDraw.clear();
                turtleCanvasDraw.draw([left, move]);
                var endStatus = turtleCanvasDraw.getStatus();
                expect(endStatus.currentY).to.equal(startStatus.currentY - 100);
                expect(endStatus.currentX).to.equal(startStatus.currentX);
            }));
        });
        describe('right', function () {
            it('should move current position south after a right command', inject(function (turtleCanvasDraw, commandFactory) {
                var startStatus = turtleCanvasDraw.getStatus();
                var right = commandFactory.rightFactory(90);
                var move = commandFactory.moveFactory(100);
                turtleCanvasDraw.clear();
                turtleCanvasDraw.draw([right, move]);
                var endStatus = turtleCanvasDraw.getStatus();
                expect(endStatus.currentY).to.equal(startStatus.currentY + 100);
                expect(endStatus.currentX).to.equal(startStatus.currentX);
            }));
        });

    });
});