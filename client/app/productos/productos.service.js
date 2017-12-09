'use strict';

function productosService($resource, API) {
    return $resource(API + '/productos/:id', {
        id: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    })
}

productosService.$inject = ['$resource', 'API'];
angular.module('tiendaApp')
    .factory('productosService', productosService);