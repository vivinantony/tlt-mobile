angular.module('tltApp')

.controller('CommonCtrl', function($scope, $state) {
    $scope.logoHeader = '<img src="img/logo-header.png" class="logo-header">';

    $scope.hideTab = function() {
        switch ($state.current.name) {
            case 'tlt.post':
                return true;
            case 'tlt.discussion':
                return true;
            default:
                return false;
        }
    };
});
