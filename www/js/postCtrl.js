angular.module('tltApp.PostCtrl', [])

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
