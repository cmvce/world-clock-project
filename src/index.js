let intervalId;
function updateTime() {
  // Cape Town
  let taipeiElement = document.querySelector("#taipei");
  if (taipeiElement) {
    let taipeiDateElement = taipeiElement.querySelector(".date");
    let taipeiTimeElement = taipeiElement.querySelector(".time");
    let taipeiTime = moment().tz("Asia/Taipei");

    taipeiDateElement.innerHTML = taipeiTime.format("MMMM Do YYYY");
    taipeiTimeElement.innerHTML = taipeiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Lausanne
  let lausanneElement = document.querySelector("#lausanne");
  if (lausanneElement) {
    let lausanneDateElement = lausanneElement.querySelector(".date");
    let lausanneTimeElement = lausanneElement.querySelector(".time");
    let lausanneTime = moment().tz("Europe/Zurich");

    lausanneDateElement.innerHTML = lausanneTime.format("MMMM Do YYYY");
    lausanneTimeElement.innerHTML = lausanneTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
                    <div>
                        <h2>${cityName}</h2>
                        <div class="date">${cityTime.format(
                          "MMMM Do YYYY"
                        )}</div>
                    </div>
                    <div class="time">${cityTime.format(
                      "h:mm:ss"
                    )} <small>${cityTime.format("A")}</small></div>
                </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
