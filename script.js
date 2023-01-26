let weather = {
    apikey: "3227ddb9dfea572322602451d18b89b8",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid="
            + this.apikey 
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp, humidity} = data.main;
        console.log(name,icon,description,temp,humidity)
        document.querySelector(".city").innertext = `Weather in` + name;
        document.querySelector(".description").innertext = description
        document.querySelector(".temp").innertext = temp + "°C"
        document.querySelector(".humidity").innertext = "humidity:" + humidity + "%"


    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    
    }
}

document.querySelector(".search button").addEventListener("click", () => {
    weather.search()
})