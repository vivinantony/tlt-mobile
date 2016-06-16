angular.module('tltApp.controllers', [])

.controller('CommonCtrl', function($scope) {
    $scope.logoHeader = '<img src="img/logo-header.png" class="logo-header">';
})

.controller('WelcomeCtrl', function($scope, $state) {
    $scope.enterIn = function() {
        $state.go('tlt.blog');
    }
})

.controller('BlogCtrl', function($scope, $http, $state, $timeout, $ionicLoading) {
    $ionicLoading.show();

    var key = "AIzaSyCODXphcNLhOyx83sdCWMTeDD9LmO3_QBY";
    var api = "https://www.googleapis.com/blogger/v3/blogs/8625939250791601558/posts?key=" + key;
    $http.get(api).success(function(res) {
        $scope.datas = res.items;
        localStorage.setItem('postTopics', JSON.stringify($scope.datas));
    }).catch(function(err) {
        console.log("Error BlogCtrl: " + err);
    }).finally(function() {
        $ionicLoading.hide();
    });

    $scope.saved = localStorage.getItem('postTopics');
    $scope.datas = (localStorage.getItem('postTopics') !== null) ? JSON.parse($scope.saved) : [];
    localStorage.setItem('postTopics', JSON.stringify($scope.datas));

    $scope.doRefresh = function() {
        $timeout(function() {
            $http.get(api).success(function(res) {
                $scope.datas = res.items;
            });
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    };

    $scope.viewPost = function(id) {
        $state.go("tlt.post", { id: id });
    };

})

.controller('PostCtrl', function($scope, $http, $stateParams, $ionicLoading) {
    $ionicLoading.show();

    var id = $stateParams.id;
    var api = "https://www.googleapis.com/blogger/v3/blogs/8625939250791601558/posts/" + id + "?key=AIzaSyCODXphcNLhOyx83sdCWMTeDD9LmO3_QBY";

    $http.get(api).success(function(res) {
        $scope.data = res;
    }).catch(function(err) {
        console.log("Error PostCtrl: " + err);
    }).finally(function() {
        $ionicLoading.hide();
    });
})

.controller('AboutCtrl', function($scope, $http, $ionicLoading, $firebaseObject) {
    $ionicLoading.show();

    var api = new Firebase("https://tlt-mobile.firebaseio.com/about");

    var obj = $firebaseObject(api);
    obj.$loaded().then(function() {
        $scope.data = obj;
    }).catch(function(err) {
        console.log("Error AboutCtrl: " + err);
    }).finally(function() {
        $ionicLoading.hide();
    });
})

.controller('ResumeCtrl', function($scope, $http, $ionicLoading, $firebaseObject) {
    $ionicLoading.show();

    var api = new Firebase("https://tlt-mobile.firebaseio.com/resume");

    var obj = $firebaseObject(api);
    obj.$loaded().then(function() {
        $scope.data = obj;
    }).catch(function(err) {
        console.log("Error ResumeCtrl: " + err);
    }).finally(function() {
        $ionicLoading.hide();
    });
})

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

.controller('ContactCtrl', function($scope) {

});
