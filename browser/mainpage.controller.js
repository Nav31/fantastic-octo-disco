

app.controller('mainpageCtrl', ($scope, MainpageFactory) => {
	$scope.getStream = function() {
		console.log('IM SCOPE.INPUT TEXT', $scope.inputText);
		MainpageFactory.getStream($scope.inputText);
	};

	$scope.stopStream = function(){
		socket.emit('end');
	};

	$scope.clearMap = function() {
		console.log(cordArray);
		cordArray = [];
		socket.emit('end');
		initMap();
	};
});
