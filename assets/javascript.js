

$(".btn-primary").on("click", function () {
    event.preventDefault();
    city = $(":input.form-control").val();

    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var iconId = response.weather[0].icon
        var weatherIcon="http://openweathermap.org/img/wn/" + iconId + "@2x.png"
        console.log(weatherIcon)
        var weatherImage = $("<img>")
        weatherImage.attr("src", weatherIcon);
        console.log(weatherImage)

        var cityDiv = $("<div>").addClass("cityName").appendTo("div.card")
        cityDiv.prepend(weatherImage)
        tempF = (((response.main.temp) - 273.15) * 1.80 + 32).toFixed(2)
         $("<div>").addClass("City").text((response.name) + ":  " + moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo(cityDiv)
         $("<div>").addClass("Temperature").text("Temperature: " + (tempF) + " °F").appendTo(cityDiv)
         $("<div>").addClass("Humidity").text("Humidity: " + (response.main.humidity) + " %").appendTo(cityDiv)
         $("<div>").addClass("Wind").text("Wind Speed: " + (response.wind.speed) + " m/s").appendTo(cityDiv)
        

        if(response.weather[0].id >= 200 && response.weather[0].id < 240){
            $(cityDiv).addClass("thunderstorm")
        }
        if(response.weather[0].id >= 300 && response.weather[0].id < 340){
            $(cityDiv).addClass("drizzle")
        }
        if (response.weather[0].id >= 500 && response.weather[0].id < 599 ){
            $(cityDiv).addClass("rain");
        }
        if(response.weather[0].id >= 600 && response.weather[0].id < 630){
            $(cityDiv).addClass("snow")
        }
        if(response.weather[0].id >= 700 && response.weather[0].id < 790){
            $(cityDiv).addClass("foggy")
        }
        if (response.weather[0].id >= 800 && response.weather[0].id < 899){
            $(cityDiv).addClass("clear");
        }
        if(response.weather[0].id >= 801 && response.weather[0].id < 810){
            $(cityDiv).addClass("clouds")
        }
    })
})





