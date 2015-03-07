//describe('rectangle', function() {
//  beforeEach(module('templates-app'));
//  beforeEach(module('common'));
//  beforeEach(module('rectangle'));
//
//  describe("rectangleFactory", function() {
//    it("should calculate area", inject(function(rectangleFactory) {
//      var rectangle = rectangleFactory({
//        width: 4,
//        height: 5
//      });
//
//      expect(rectangle.area()).to.equal(20);
//    }));
//
//    it("should have a default color", inject(function(rectangleFactory) {
//      var rectangle = rectangleFactory();
//
//      expect(rectangle.color).to.have.length(7); //like #FFFFFF
//    }));
//  });
//});