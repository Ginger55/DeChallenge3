
function getAPIdata() {


	fetch('https://api.openweathermap.org/data/2.5/forecast?q=Hoek%20van%20Holland,nl&appid=3389ccc0d1bac5cb8105b80018b2ee18', 	// de api link

		)
	
	.then(function(response) {
		return response.json();
	})
	
	
	.then(function(response) { // het weer teruggegeven

	
		onAPISucces(response);
	})
	.catch(function (error) {
	
		console.error('Request failed', error);
	});
}

function onAPISucces(response) {

	var now = response.list[0].main;
	var type = response.list[0].weather[0].main
	var degC = Math.floor(now.temp - 273.15); 	// in celcius
	var weatherBox = document.getElementById('weer');
	weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}

getAPIdata();


