'use strict';

angular.module('tiendaApp', [
    'tiendaApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
])

.constant('API', "http://192.168.100.253:8080/tiendaBackend/api")
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });