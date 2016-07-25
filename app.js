angular.module('ngdirectives', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('ngdirectives').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('master-detail', {
        url: '/master-detail',
        templateUrl: 'partial/master-detail/master-detail.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('ngdirectives').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
