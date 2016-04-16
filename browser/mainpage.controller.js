

app.controller('mainpageCtrl', ($scope, MainpageFactory) => {
	$scope.getStream = function() {
		console.log('IM SCOPE.INPUT TEXT', $scope.inputText);
		MainpageFactory.getStream($scope.inputText)
		.then(function(){console.log('success');})
	};

	$scope.stopStream = () => {
		socket.emit('end');
		cordArray = [];
	};

	$scope.clearMap = () => {
		cordArray = [];
		socket.emit('end');
		initMap();
	};
});
