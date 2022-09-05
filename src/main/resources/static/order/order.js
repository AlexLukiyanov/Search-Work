angular.module('market-front').controller('orderController', function ($scope, $rootScope, $http) {
    const contextPath = 'http://localhost:8189/app/api/v1';

    $scope.loadOrders = function () {
        $http.get(contextPath + '/orders')
            .then(function (response) {
                $scope.MyOrders = response.data;
            });
    };

    $scope.loadOrders();
});