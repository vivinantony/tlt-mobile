angular.module('tltApp.WelcomeCtrl', [])

.controller('WelcomeCtrl', function($scope, $state) {
    $scope.enterIn = function() {
        $state.go('tlt.blog');
    }
});
