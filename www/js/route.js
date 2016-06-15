angular.module('tltApp.router', [])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('welcome', {
        url: '/welcome',
        templateUrl: 'templates/welcome.html',
        controller: 'WelcomeCtrl'
    })

    .state('tlt', {
        url: "/tlt",
        abstract: true,
        templateUrl: "templates/menu.html"
    })

    // setup an abstract state for the tabs directive
    // .state('tlt', {
    //   url: '/tlt',
    //   abstract: true,
    //   templateUrl: 'templates/tabs.html'
    // })

    // Each tab has its own nav history stack:

    .state('tlt.blog', {
        url: '/blog',
        views: {
            'tlt-blog': {
                templateUrl: 'templates/blog.html',
                controller: 'BlogCtrl'
            }
        }
    })

    .state('tlt.post', {
        url: '/blog/:id',
        views: {
            'tlt-blog': {
                templateUrl: 'templates/posts.html',
                controller: 'PostCtrl'
            }
        }
    })

    .state('tlt.about', {
        url: '/about',
        views: {
            'tlt-about': {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            }
        }
    })

    .state('tlt.resume', {
        url: '/resume',
        views: {
            'tlt-resume': {
                templateUrl: 'templates/resume.html',
                controller: 'ResumeCtrl'
            }
        }
    })

    .state('tlt.portfolio', {
        url: '/portfolio',
        views: {
            'tlt-portfolio': {
                templateUrl: 'templates/portfolio.html',
                controller: 'PortfolioCtrl'
            }
        }
    })

    .state('tlt.contact', {
        url: '/contact',
        views: {
            'tlt-contact': {
                templateUrl: 'templates/contact.html',
                controller: 'ContactCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tlt/blog');

});
