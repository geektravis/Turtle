//describe('rectangle', function() {
//  beforeEach(module('templates-app'));
//  beforeEach(module('common'));
//  beforeEach(module('rectangle'));
//
//  describe('rectangles service', function() {
//    describe('add', function() {
//      it("should add rectangle objects", inject(function(rectangles) {
//        rectangles.add(1, 2);
//
//        var rectangle = rectangles.list()[0];
//        expect(rectangle).property('width').to.equal(1);
//        expect(rectangle).property('height').to.equal(2);
//        expect(rectangle).to.respondTo('area');
//      }));
//    });
//
//    describe('list', function() {
//      it("should hold a list of rectangles", inject(function(rectangles) {
//        rectangles.add(1, 2);
//        rectangles.add(3, 4);
//
//        expect(rectangles.list()).to.have.length(2);
//      }));
//    });
//  });
//});