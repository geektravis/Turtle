angular.module('logo').directive('commandPicker', function () {
    return {
        controller: 'CommandPickerController',
        templateUrl: 'logo/commandPicker.directive.tpl.html'
//        template: 'HELLO!'
    };
});