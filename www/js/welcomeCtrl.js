angular.module('tltApp')

.controller('WelcomeCtrl', function($scope, $state, $http) {
    $scope.enterIn = function() {
        $state.go('tlt.blog');
    };

    $scope.post = function(blog) {
        console.log(blog);
        var api = "https://www.googleapis.com/blogger/v3/blogs/5070544082073831121/posts?key=AIzaSyCODXphcNLhOyx83sdCWMTeDD9LmO3_QBY";
        $http.post(api, blog).success(function(data) {
            $scope.blog = data;
        });
    }
});
