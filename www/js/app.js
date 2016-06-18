angular.module('tltApp', ['ionic', 'firebase', 'tltApp.router', 'tltApp.filter', 'tltApp.CommonCtrl', 'tltApp.WelcomeCtrl', 'tltApp.BlogCtrl', 'tltApp.PostCtrl', 'tltApp.AboutCtrl', 'tltApp.ResumeCtrl', 'tltApp.PortfolioCtrl', 'tltApp.ContactCtrl'])

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
    $ionicConfigProvider.backButton.previousTitleText('');
}])
