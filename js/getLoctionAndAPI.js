//Api 

const myApi = {

    key: "24d26e86cc84b567c2140ceb9c8a7861",
    proxy: 'https://cors-anywhere.herokuapp.com/'
};
const weather = {};
//checks if geolocation exists in navigator (browser supports navigation)
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
//THROWS AN ERROR WHEN GEOLOCATION DOES NOT WORKS
function showError() {
    console.log("location enable kar be");
}
//Setting user's location
function setPosition(position) {
    let myLatitude = position.coords.latitude;
    let myLongitude = position.coords.longitude;

    console.log(myLongitude, myLatitude);
    getWeather(myLatitude, myLongitude);
}

//location value
let lcoation13 = mainlocation;
//document.write(lcoation13);
//GET WEATHER

function getWeather(myLat, myLong) {
    let link = `${myApi.proxy}https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myApi.key}`;
    fetch(link)  //send a network request and get the information from the server
        .then(response => {
            let data = response.json(); //now whatever response we get, parse it into json and store in data
            return data;

        })
        .then(data => { //then we update our weather object with the required data 
            console.log(data, "data");
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(() => { //then display the weather to the ui
            displayWeather();
        });
}
//DISPLAYING THE WEATHER TO THE UI
function displayWeather() {
    lcoation13.textContent = `${weather.city}, ${weather.country}`;

}
