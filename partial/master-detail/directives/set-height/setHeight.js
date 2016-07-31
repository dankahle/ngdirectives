angular.module('ngdirectives')
    .directive('setHeight', function() {
    return {
        restrict: 'A',
        scope: {
            selected: '='
        },
        link: function(scope, element, attrs, fn) {
            $(window).resize(setHeight);
            scope.$watch('selected', setHeight);

            setHeight();

            function setHeight() {
                var headerHeight = 132,
                    percentage;
                if (scope.selected) {
                    percentage = parseInt(attrs.setHeight);
                }
                else {
                    percentage = 100;
                }
                var height = (window.innerHeight - headerHeight) * (percentage/100)
                element.css('height', height);
            }

        }
    };
});
