angular.module('ngdirectives')
    .directive('mdName', function() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: '{{name.last}}, {{name.first}}'
    };
});
