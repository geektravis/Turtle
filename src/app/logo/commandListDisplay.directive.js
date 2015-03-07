angular.module('logo').directive('commandListDisplay', function () {
    return {
        controller: 'LogoController',
        templateUrl: 'logo/commandListDisplay.directive.tpl.html'
//        template: 'HELLO!'
    };
});