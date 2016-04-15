

app.factory('MainpageFactory', ($http) => {
	return {
		getStream: (inputText) => {
			return $http.get("/api/stream/" + inputText);
		}
	};
});