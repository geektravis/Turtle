describe('logo', function () {
    beforeEach(module('common'));
    beforeEach(module('logo'));


    describe('turtleCanvasDraw', function () {
        describe('move', function () {
            it('should move current position north with the default setting', inject(function (turtleCanvasDraw, commandFactory) {
                var startStatus = turtleCanvasDraw.getStatus();
                var move = commandFactory.moveFactory(100);
                turtleCanvasDraw.clear();
                turtleCanvasDraw.draw([move]);
                var endStatus = turtleCanvasDraw.getStatus();
                console.log(startStatus);
                console.log(endStatus);
                expect(endStatus.currentX).to.be.closeTo(startStatus.currentX, 0.001);
                expect(endStatus.currentY).to.be.closeTo(startStatus.currentY - 100, 0.001);
            }));
        });

        describe('left', function () {
            it('should move current position west after a left command', inject(function (turtleCanvasDraw, commandFactory) {
                var startStatus = turtleCanvasDraw.getStatus();
                var left = commandFactory.leftFactory(90);
                var move = commandFactory.moveFactory(100);
                turtleCanvasDraw.clear();
                turtleCanvasDraw.draw([left, move]);
                var endStatus = turtleCanvasDraw.getStatus();
                expect(endStatus.currentX).to.be.closeTo(startStatus.currentX - 100, 0.001);
                expect(endStatus.currentY).to.be.closeTo(startStatus.currentY, 0.001);
            }));
        });
        describe('right', function () {
            it('should move current position east after a right command', inject(function (turtleCanvasDraw, commandFactory) {
                var startStatus = turtleCanvasDraw.getStatus();
                var right = commandFactory.rightFactory(90);
                var move = commandFactory.moveFactory(100);
                turtleCanvasDraw.clear();
                turtleCanvasDraw.draw([right, move]);
                var endStatus = turtleCanvasDraw.getStatus();
                expect(endStatus.currentX).to.be.closeTo(startStatus.currentX + 100, 0.001);
                expect(endStatus.currentY).to.be.closeTo(startStatus.currentY, 0.001);
            }));
        });

    });
});