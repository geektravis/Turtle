//describe('rectangle', function() {
//  beforeEach(module('templates-app'));
//  beforeEach(module('common'));
//  beforeEach(module('rectangle'));
//
//
//  describe('rectangle directive', function() {
//    var $compile;
//    var $scope;
//
//    beforeEach(inject(function(_$compile_, $rootScope){
//      $compile = _$compile_;
//      $scope = $rootScope.$new();
//    }));
//
//    it('should contain css for dimensions and color', inject(function(rectangleFactory) {
//      $scope.rectangle = rectangleFactory({
//        width: 123,
//        height: 234,
//        color: '#123456'
//      });
//      var element = $compile('<div rectangle="rectangle"></div>')($scope);
//      $scope.$digest();
//
//      var html = element.html();
//      expect(html).to.contain('width: 123px');
//      expect(html).to.contain('height: 234px');
//      expect(html).to.contain('background-color: #123456');
//    }));
//
//    it('should contain area as content', inject(function(rectangleFactory) {
//      $scope.rectangle = rectangleFactory({
//        width: 4,
//        height: 5
//      });
//      var element = $compile('<div rectangle="rectangle"></div>')($scope);
//      $scope.$digest();
//
//      var rectangleEl = element.find('.rectangle');
//      console.log(rectangleEl);
//      expect(rectangleEl[0]).to.be.ok;
//      expect(rectangleEl.html()).to.contain('20px');
//    }));
//  });
//});
