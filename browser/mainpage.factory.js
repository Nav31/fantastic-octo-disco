

app.factory('MainpageFactory', ($http) => {
	return {
		getStream: (inputText) => {
			$http.get("/api/stream/" + inputText);
		}
	};
});