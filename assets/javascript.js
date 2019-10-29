

$(".btn-primary").on("click", function () {
    event.preventDefault();
    city = $(":input.form-control").val();

    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        tempF = (((response.main.temp) - 273.15) * 1.80 + 32).toFixed(2)
        var newList = $("<ul>").addClass("City").text(response.name)
        var newCityTemp = $("<li>").addClass("list-group-item Temperature").text("Temperature: " + (tempF) + " °F");
        var newCityHumidity = $("<li>").addClass("list-group-item Humidity").text("Humidity: " + (response.main.humidity) + " %");
        var newCityWind = $("<li>").addClass("list-group-item Wind").text("Wind Speed: " + (response.wind.speed) + " m/s");

        $("section").append(newList)
        $("ul").append(newCityTemp, newCityHumidity, newCityWind)


    })
})





