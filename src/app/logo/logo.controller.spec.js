//describe('rectangle', function() {
//  beforeEach(module('templates-app'));
//  beforeEach(module('common'));
//  beforeEach(module('rectangle'));
//
//
//  describe('addRectangleController', function() {
//    describe('saveRectangle', function() {
//      it('should add a rectangle and go home', inject(function($controller, rectangles, $state) {
//        var scope = {
//          width: 100,
//          height: 200
//        };
//        var indexController = $controller('addRectangleController', {
//          $scope: scope
//        });
//
//        sinon.stub($state, 'go');
//
//        scope.saveRectangle(true);
//
//        expect(rectangles.list()).to.have.length(1);
//        expect($state.go.calledWith('index')).to.equal(true);
//
//        $state.go.restore();
//      }));
//    });
//  });
//});