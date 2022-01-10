const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');

const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp')

const city_name = document.getElementById('city_name');

const datahide = document.querySelector('.middle_layer')


const getDateandDay = () => {  
    let weekday = new Array(7);
    weekday[0] = "Sunday";   
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const To_Day =new Date();
    const days = weekday[To_Day.getDay()];
    let day = document.getElementById('day');

    day.innerText = days;

    const today_data= document.getElementById('today_data');
    let months = [
        "Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec",
    ]
    let month = months[To_Day.getMonth()];
    let date = To_Day.getDate();

    today_data.innerHTML = `${date} , ${month}`;
}

getDateandDay();

const getInfo = async(event) => {
    event.preventDefault();     //to not get ? on url as its a form tab
    let cityVal = cityName.value;


    if (cityVal === ""){
        city_name.innerText = `Please ,Write name before search`;
        datahide.classList.add('data_hide');


    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f4698474550c993caf31b11c11c261f4`;

        
           
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;

            temp.innerHTML = `<span>${arrData[0].main.temp}</span> <sup>o</sup>C`;
            temp_status.innerText = arrData[0].weather[0].main;
            
            //condition to check sunny or cloudy

            if(temp <= 5.00){
                temp_status.innerHTML =
                `<i class="fas fa-sun" style='color : #eccc68;'></i>`
            }else if(5 <= temp <= 15.00){
                temp_status.innerHTML =
                `<i class="fas fa-cloud-sun" style='color : #f1f2f6;'></i>`
            }else if ( 15.00 <= temp <= 25.00) {
                temp_status.innerHTML =
                `<i class="fas fa-cloud" style='color : #a4b0be;'></i>`
            }else {
                temp_status.innerHTML =
                `<i class="fas fa-sun" style='color : #f1f2f6;'></i>`
            }
        
            datahide.classList.remove('data_hide');
            
            
           
        }catch{
            city_name.innerText = `Please ,Enter city name Properly`;
            datahide.classList.add('data_hide');

        }
    }
}

// const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click',getInfo);
// var input = document.getElementById("myInput");
// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("myBtn").click();
//   }
// });