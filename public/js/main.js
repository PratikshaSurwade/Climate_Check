const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');

const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp')

const city_name = document.getElementById('city_name')

const getInfo = async(event) => {
    event.preventDefault();     //to not get ? on url as its a form tab
    let cityVal = cityName.value;


    if (cityVal === ""){
        city_name.innerText = `Please ,Write name before search`;
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=f4698474550c993caf31b11c11c261f4`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}`;

            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            
            //condition to check sunny or cloudy

            
           
        }catch{
            city_name.innerText = `Please ,Enter city name Properly`;
        }
    }
}
submitBtn.addEventListener('click',getInfo);