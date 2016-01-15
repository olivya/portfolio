var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config(function ($routeProvider,$locationProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainCtrl'
    })

    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller  : 'mainCtrl'
    })

    .when('/projects', {
        templateUrl : 'pages/projects.html',
        controller  : 'mainCtrl'
    })

    .when('/projects/geisha', {
        templateUrl : 'pages/projects/geisha.html',
        controller  : 'mainCtrl'
    })

    .when('/projects/gep', {
        templateUrl : 'pages/projects/gep.html',
        controller  : 'mainCtrl'
    })

    .when('/projects/level-designs', {
        templateUrl : 'pages/projects/level-designs.html',
        controller  : 'mainCtrl'
    })

    .when('/projects/gep', {
        templateUrl : 'pages/projects/gep.html',
        controller  : 'mainCtrl'
    })

    .when('/projects/character-art', {
        templateUrl : 'pages/projects/character-art.html',
        controller  : 'mainCtrl'
    })

    .when('/projects/wind-city', {
        templateUrl : 'pages/projects/wind-city.html',
        controller  : 'mainCtrl'
    })

    .when('/projects/personal-brand', {
        templateUrl : 'pages/projects/personal-brand.html',
        controller  : 'mainCtrl'
    })

    .when('/projects/bubbalist', {
        templateUrl : 'pages/projects/bubbalist.html',
        controller  : 'mainCtrl'
    })

    .when('/projects/3d-modeling', {
        templateUrl : 'pages/projects/3d-modeling.html',
        controller  : 'mainCtrl'
    })

    .when('/about', {
        templateUrl : 'pages/about.html',
        controller  : 'mainCtrl'
    })

    .when('/resume', {
        templateUrl : 'pages/resume.html',
        controller  : 'mainCtrl'
    })

    .otherwise({ redirectTo: '/' });

	$locationProvider.html5Mode(true);
});