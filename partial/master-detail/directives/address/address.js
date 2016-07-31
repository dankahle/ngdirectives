angular.module('ngdirectives').directive('address', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            md: '=',
            address: '='
        },
        templateUrl: 'partial/master-detail/directives/address/address.html',
        link: function(scope, element, attrs, fn) {


        }
    };
});
