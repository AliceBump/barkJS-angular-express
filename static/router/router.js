module.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'views/mainIndex.html',
      controller: 'mainController'
    }).
    when('/signup',{
      templateUrl:'views/signup.html',
      controller:'signupController'
    }).
    when('/login',{
      templateUrl:'views/login.html',
      controller:'loginController'
    }).
    otherwise ({
      redirectTo: '/'
    });
  }
]);

