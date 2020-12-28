var button=document.querySelector('.button')
var inputValue=document.querySelector('.inputValue')
var name=document.querySelector('.name')
var desc=document.querySelector('.desc')
var temp=document.querySelector('.temp')

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0b2f264e0ed45240ebcdc472a12b6ab8').then(response=>response.json()).then(data=>{
var nameValue=data['name'];
var tempValue=data['main']['temp'];
var descValue=data['weather'][0]['description'];

name.innerHTML=nameValue;
temp.innerHTML=(tempValue-273.10).toFixed(2)+'  degree Celcius';
desc.innerHTML=descValue;
})
.catch(err=>alert("Wrong city name"))
})
