angular.module('tltApp.BlogCtrl', [])

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

    // $scope.saved = localStorage.getItem('postTopics');
    // $scope.datas = (localStorage.getItem('postTopics') !== null) ? JSON.parse($scope.saved) : [];
    // localStorage.setItem('postTopics', JSON.stringify($scope.datas));

    $scope.search = function(query) {
        $ionicLoading.show();

        var key = "AIzaSyCODXphcNLhOyx83sdCWMTeDD9LmO3_QBY";
        var api = "https://www.googleapis.com/blogger/v3/blogs/8625939250791601558/posts/search?q=" + query + "&key=" + key;

        $http.get(api).success(function(res) {
            $scope.datas = res.items;
        }).catch(function(err) {
            console.log("Error SearchCtrl: " + err);
        }).finally(function() {
            $ionicLoading.hide();
        });
    };

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

});