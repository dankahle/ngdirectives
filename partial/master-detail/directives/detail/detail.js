angular.module('ngdirectives').directive('detail', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            md: '=',
            user: '='
        },
        templateUrl: 'partial/master-detail/directives/detail/detail.html',
        link: function(scope, element, attrs, fn) {
            scope.moment = moment;
        }
    };
});
