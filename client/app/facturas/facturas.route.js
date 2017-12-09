'use strict';

angular.module('tiendaApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('facturas-list', {
                url: '/facturas-list',
                template: '<facturas-list></facturas-list>'
            });
    });