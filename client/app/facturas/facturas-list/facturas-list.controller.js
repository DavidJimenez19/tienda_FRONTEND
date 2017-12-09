'use strict';
(function() {

    class FacturasListComponent {
        constructor(productosService) {
            this.productosService = productosService;
            this.precioTotal = 0;
            this.descuentoTotal = 0;
            this.descuentoProducto = 0;
            this.carrito = [];
        }


        $onInit() {
            this.productosService.query().$promise
                .then(response => {
                    this.productos = response;
                })
                .catch(err => {
                    console.log("Error", err);
                })
        }


        agregarProducto(item) {
            for (var i = 0; i < this.carrito.length; i++) {
                // if (this.carrito.productos.id == item.id) {
                //     this.carrito.
                // }
            }
            this.carrito.push(item);
            this.descuentoProducto = (item.valor * item.descuento) / 100;
            this.descuentoTotal += this.descuentoProducto;
            this.precioTotal += item.valor - this.descuentoTotal;
        }

        ocultarProducto(index) {
            this.productos.splice(index, 1);
        }

        eliminarProducto(item, index) {
            this.descuentoProducto = (item.valor * item.descuento) / 100;
            this.descuentoTotal -= this.descuentoProducto;
            this.precioTotal -= item.valor - (this.descuentoProducto + this.descuentoTotal);
            this.carrito.splice(index, 1);
        }

    }

    angular.module('tiendaApp')
        .component('facturasList', {
            templateUrl: 'app/facturas/facturas-list/facturas-list.html',
            controller: FacturasListComponent,
            controllerAs: 'vm'
        });

})();