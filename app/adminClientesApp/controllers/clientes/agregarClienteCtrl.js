angular.module('adminClientesApp')
.controller('agregarClienteCtrl',['$scope','$http','$location','servicioDatos', function($scope,$http,$location,servicioDatos){
	$scope.accionCliente = "Agregar ";
	
	
	   
	$http.get('app/recursos/estadosMexico.json').success(function(data) {
      $scope.estadosMx = data;
	/*   $scope.cliente = {};
	  $scope.cliente.estado1 = {"clave": "", "nombre":"Seleccione..."}; */
	});

	$scope.guardar = function(){
	    $scope.cliente.estado = 1; // parseInt($scope.cliente.estado1.clave);
	    $scope.cliente.estado1.clave = 1;
        $scope.cliente.estado1.nombre = "Aguascalientes";
		servicioDatos.agregaCliente($scope.cliente).$promise.then(
			function(data){
				alert("Cliente agregado correctamente");
				$location.path('/clientes');
			}
		);
		
	};
}]);
