angular.module('tltApp.PortfolioCtrl', [])

.controller('PortfolioCtrl', function($scope, $http, $ionicModal, $state, $firebaseObject, $ionicLoading, $timeout) {
    $ionicLoading.show();

    var api = new Firebase("https://tlt-mobile.firebaseio.com/portfolio");
    var obj = $firebaseObject(api);
    obj.$loaded().then(function() {
        $scope.portfolios = obj;
    }).catch(function(err) {
        console.log("Error PortfolioCtrl: " + err);
    }).finally(function() {
        $ionicLoading.hide();
    });

    $scope.limit = 5;

    // modal
    $ionicModal.fromTemplateUrl('templates/portfolio-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.portfolioModal = modal;
    });
    $scope.showPortfolioModal = function() {
        $scope.portfolioModal.show();
    };
    $scope.hidePortfolioModal = function() {
        $scope.portfolioModal.hide();
    };

    $scope.fetchSingleData = function(id) {
        $ionicLoading.show();

        $timeout(function() {
            $ionicLoading.hide();
            $scope.portfolioModal.show();
        }, 3000);

        obj.$loaded().then(function() {
            angular.forEach(obj, function() {
                $scope.portfolio = obj[id - 1];
            });
        }).catch(function(err) {
            console.log("Error Portfolio Modal: " + err);
        });
    }
})
