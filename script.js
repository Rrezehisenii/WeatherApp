const cityInput = document.querySelector(".city-input");

const searchButton = document.querySelector(".search-btn");

const API_KEY = "bd5e378503939ddaee76f12ad7a97608"; //api key nga openweather map api

const getWeatherDetails=(cityName ,lat, lon) => {
    const WEATHER_API_URL='http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}';

    fetch(WEATHER_API_URL).then(res => res.json()).then(data =>{
        console.log(data);
    }).catch(() =>{
        alert("Ndodhi një gabim gjatë marrjes së parashikimit të motit")
    })
}

const getCityCoordinates = () => {

    const cityName = cityInput.value.trim();//merrni emrin e qytetit të futur nga përdoruesi dhe hiqni hapësirën shtesë
    if(!cityName) return; // kthe kur cityName eshte i zbrazet
const GEOCODING_API_URL ='http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}';

//merrni koordinatat e futura të qytetit (gjerësia, gjatësia dhe emri) nga përgjigja API
fetch(GEOCODING_API_UR).then(res=>res.json()).then(data =>{
    if(!data.length) return alert('nuk u gjet as nje kordinat per ${cityName}');
    const { name,lat,lon}= data[0];
    getWeatherDetails(name,lat,lon);
}).catch(()=>{
    alert("Ndodhi një gabim gjatë marrjes së koordinatave");
});

}

searchButton.addEventListener("click", getCityCoordinates);