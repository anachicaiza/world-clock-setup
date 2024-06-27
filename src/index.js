function updateTime(){
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles")

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

//Lagos 
let lagosElement = document.querySelector("#lagos");
let lagosDateElement = lagosElement.querySelector(".date");
let lagosTimeElement = lagosElement.querySelector(".time");
let lagosTime = moment().tz("Africa/Lagos")

lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>]A[</small>]");

//Macao
let macaoElement = document.querySelector("#macao");
let macaoDateElement = macaoElement.querySelector(".date");
let macaoTimeElement = macaoElement.querySelector(".time");
let macaoTime = moment().tz("Asia/Macao")

macaoDateElement.innerHTML = macaoTime.format("MMMM Do YYYY");
macaoTimeElement.innerHTML = macaoTime.format("h:mm:ss [<small>]A[</small>]");
};

setInterval(updateTime, 1000);