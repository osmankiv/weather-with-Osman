//Api 
const myApi = {

    key: "24d26e86cc84b567c2140ceb9c8a7861",
    proxy: 'https://cors-anywhere.herokuapp.com/'
};
const localLoction = {
    latitude: "19.6182016",
    longitude: "37.1982336",
    timestamp: "1708947130583"
}
const myApi2 = {
    proxy: 'no-cors'
};
//location value
const weather = {};
//checks if geolocation exists in navigator (browser supports navigation)
/*if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
//THROWS AN ERROR WHEN GEOLOCATION DOES NOT WORKS
function showError() {
    console.log("location enable or not fond");
}
//Setting user's location
function setPosition(position) {
    let myLatitude = position.coords.latitude;
    let myLongitude = position.coords.longitude;
// console.log(myLongitude, myLatitude);
    getWeather(myLatitude, myLongitude);

}
//  SERVER SITE

//GET WEATHER

function getWeather(myLat, myLong) {.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myApi.key}`;
    fetch(link)  //send a network request and get the information from the server
        .then(response => {
            let data = response.json(); //now whatever response we get, parse it into json and store in data
            return data;

    let link = `${myApi.proxy}https://api.openweathermap
        })
        .then(data => { //then we update our weather object with the required data 
            console.log(data);
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
*/
///osman test side 
navigator.geolocation.getCurrentPosition(getWeather2);

//Setting user's location
function setPosition2(position) {
    let myLatitude = position.coords.latitude;
    let myLongitude = position.coords.longitude;
    displayWeatherlocal(myLatitude);
    getWeather2(myLatitude, myLongitude);

}

function getWeather2(a, b) {
    let linkOfjason = `http://localhost:5500/js/dataWeather.json`;
    const response = fetch(linkOfjason, { method: "GET", mode: "no-cors" })
        .then((response) => {
            let dataj = response.json();

            console.log(response);

            if (a != undefined) {
                console.log(a),
                    console.log(b)
            }
            else {
                console.log(localLoction.latitude),
                console.log(localLoction.longitude)
            }
        })
        .then((result) => {
            result =
                `{
                "city" :" khartoum" ,
                "conter" :"sudan",
                "termo":24 ,
                "minetemperature":21 ,
                "maxtemperature":35
            }`;
            let datajson = JSON.parse(result);
            city = datajson.city;
            conter = datajson.conter;
            termot = datajson.termo;
            minetemperaturet = datajson.minetemperature;
            maxtemperaturet = datajson.maxtemperature;
            displayWeatherlocal(city, conter, termot, minetemperaturet, maxtemperaturet);
        })
        ;

}

function displayWeatherlocal() {
    document.getElementById('card1').textContent = `${conter}, ${city}`;
    document.getElementById('deflocation').textContent = `${conter}`;
    document.getElementById('degre').value = termot;
    document.getElementById('minetemperature').value = minetemperaturet;
    document.getElementById('maxtemperature').value = maxtemperaturet;
}
getWeather2();


//console.log(location.geolocation)