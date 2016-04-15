

app.controller('mainpageCtrl', ($scope, MainpageFactory) => {
	$scope.getStream = function() {
		console.log('IM SCOPE.INPUT TEXT', $scope.inputText);
		MainpageFactory.getStream($scope.inputText)
		.then(function(){
			console.log('success');
		})
	};

	$scope.stopStream = function(){
		socket.emit('end');
		cordArray = [];
	};

	$scope.clearMap = function() {
		cordArray = [];
		socket.emit('end');
		initMap();
	};
});
