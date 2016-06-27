$scope.showNotification = function() {
        notify.createNotification($scope.notification.title, {
            body: $scope.notification.body,
            icon: $scope.notification.icon
        });
    }