angular.module('tltApp')

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
