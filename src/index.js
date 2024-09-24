function updateTime() {
  // Cape Town
  let taipeiElement = document.querySelector("#cape-town");
  if (taipeiElement) {
    let taipeiDateElement = capeTownElement.querySelector(".date");
    let taipeiTimeElement = capeTownElement.querySelector(".time");
    let taipeiTime = moment().tz("Asia/Taipei");

    taipeiDateElement.innerHTML = taipeiTime.format("MMMM Do YYYY");
    taipeiTimeElement.innerHTML = taipeiTime.format(
      "h:m:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);
