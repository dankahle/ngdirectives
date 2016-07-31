angular.module('ngdirectives')
    .controller('MasterDetailCtrl', function ($scope, MasterDetailData) {

        var md = this;
        md.users = MasterDetailData;


});
