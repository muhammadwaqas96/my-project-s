const apiKey = "bdc477ab0d8450986abcf5f361ac6144";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const WeatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        if(data.weather[0].main == "cloud"){
            WeatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Clear"){
            WeatherIcon.src = "clear.png"
        }
        else if(data.weather[0].main == "snow"){
            WeatherIcon.src = "snow.png"
        }
        else if(data.weather[0].main == "Mist"){
            WeatherIcon.src = "mist.png"
        }
        else if(data.weather[0].main == "Haze"){
            WeatherIcon.src = "haze.png"
        }
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";    
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

