angular.module('tltApp')

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
