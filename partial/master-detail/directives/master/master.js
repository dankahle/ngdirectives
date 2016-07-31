angular.module('ngdirectives')
    .directive('master', function($timeout) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            md: '=',
            user: '='
        },
        templateUrl: 'partial/master-detail/directives/master/master.html',
        link: function(scope, element, attrs, fn) {

            scope.moment = moment;
            scope.selectUser = function() {
                scope.md.selected = scope.user;
                $timeout(function() {
                    var $masterDiv = $('.master-div');
                    $masterDiv.scrollTop(element.position().top + $masterDiv.scrollTop() - 20);
                })
            }

        }
    };
});
