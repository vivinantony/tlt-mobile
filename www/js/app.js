angular.module('tltApp', ['ionic', 'firebase', 'tltApp.router', 'tltApp.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('top');
    $ionicConfigProvider.navBar.alignTitle('center');
    $ionicConfigProvider.backButton.previousTitleText('').icon('ion-ios-arrow-left');
}])
