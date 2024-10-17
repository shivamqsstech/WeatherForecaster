const apiKey = "933fb08c8e5fc072cfe066d7313c562b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");


async function checkWeather(city) {
const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
var data = await response.json();
console.log(data);


document.querySelector(".city").innerHTML = data.name;
document.querySelector('.temp').innerHTML = data.main.temp + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";




}

searchBtn.addEventListener('click', ()=>{

    checkWeather(searchBox.value);
    
})


