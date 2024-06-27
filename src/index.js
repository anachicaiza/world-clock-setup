function updateTime(){
    //Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles")

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
    }

    //Lagos 
    let lagosElement = document.querySelector("#lagos");
    if (losAngelesElement) {
        let lagosDateElement = lagosElement.querySelector(".date");
        let lagosTimeElement = lagosElement.querySelector(".time");
        let lagosTime = moment().tz("Africa/Lagos")

        lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
        lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>]A[</small>]");
    }

    //Macao
    let macaoElement = document.querySelector("#macao");
    if (losAngelesElement) {
        let macaoDateElement = macaoElement.querySelector(".date");
        let macaoTimeElement = macaoElement.querySelector(".time");
        let macaoTime = moment().tz("Asia/Macao")

        macaoDateElement.innerHTML = macaoTime.format("MMMM Do YYYY");
        macaoTimeElement.innerHTML = macaoTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
     <div class="city">
        <div>
         <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.
            format("A")}</small></div>
      </div>
      <a href="/">All cities</a>
      `;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
