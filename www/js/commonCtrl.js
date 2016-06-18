angular.module('tltApp.CommonCtrl', [])

.controller('CommonCtrl', function($scope, $state) {
    $scope.logoHeader = '<img src="img/logo-header.png" class="logo-header">';

    $scope.hideTab = function() {
        switch ($state.current.name) {
            case 'tlt.post':
                return true;
            default:
                return false;
        }
    };
});
