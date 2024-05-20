const apikey = "4dc6992a78ee2b580477c0c1645e4cb9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block"
        
        document.querySelector(".weather").style.display = "none"


    }
    else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    
        if(data.weather[0].main == "Clouds")
        {
            weatherIcon.scr = "image/cloud.png";
        }
    
        else if(data.weather[0].main == "Rain")
        {
            weatherIcon.scr = "image/rain.png";
        }
    
        else if(data.weather[0].main == "Clear")
        {
            weatherIcon.scr = "image/clear.png";
        }
    
        else if(data.weather[0].main == "Drizzle")
        {
            weatherIcon.scr = "image/dizzle.png";
        }
        else if(data.weather[0].main == "Mist")
        {
            weatherIcon.scr = "image/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none "
    

    }
}
searchbtn.addEventListener('click',()=>{
    checkweather(searchbox.value);

})

 