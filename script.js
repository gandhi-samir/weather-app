var button = document.querySelector(".button");
var inputValue= document.querySelector(".inputValue");
var cityName= document.querySelector(".cityName");
var temp = document.querySelector(".temp");
var forecast = document.querySelector(".forecast");
var image = document.querySelector(".myImg");
//1ec89612f80777ac406101f79b808355



button.addEventListener('click',function(){fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=1ec89612f80777ac406101f79b808355')
.then(response=>response.json())

.then(data=>{

    var cityNameValue=data.name;
var tempValue = data['main']['temp'];
var forecastValue=data['weather'][0]['description'];
var country =data['sys']['country'];
var imageLink=data['weather'][0]['icon'];



cityName.innerHTML=cityNameValue+', '+country;

if(tempValue<20){
    temp.innerHTML=tempValue+'&#8451'+" :(";
}
else{
    temp.innerHTML=tempValue+'&#8451'+' :)';
}

forecast.innerHTML=forecastValue;
image.src= "http://openweathermap.org/img/wn/"+imageLink+"@2x.png";

console.log(data)

});

});
