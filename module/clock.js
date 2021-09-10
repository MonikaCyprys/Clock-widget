(function () {
  const url =
    "https://api.ipgeolocation.io/ipgeo?apiKey=a64c5cd36a8845578bada08e0052dcd8&";

  async function getLocationAndTime(url) {
    const {
      city,
      country_code2,
      time_zone: { current_time },
    } = await fetch(url)
      .then((r) => r.json())
      .then((r) => r);
    return {
      city: city,
      country: country_code2,
    };
  }
  const location = getLocationAndTime(url)
    .then((result) => result)
    .catch(() => console.log("sth wrong"));

  async function getNewLocationAndTime() {
    const { city, country } = await location;
    const actualTime = showDataTime();
    showBackround(city, actualTime);
    showDataLocation(city, country);
  }

  function showDataLocation(city, country) {
    const location = document.querySelector(".clock__location");
    location.textContent = `In ${city}, ${country}`;
  }
  function showDataTime() {
    const clock = document.querySelector(".clock__time");
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    const actualTime = h + ":" + m;

    clock.textContent = actualTime;
    setTimeout(showDataTime, 1000);
    return actualTime;
  }

  async function getSunsetAndSunrise(url, city) {
    const astroUrl = url.replace("ipgeo?", "astronomy?");
    const { sunrise, sunset } = await fetch(astroUrl + "location=" + city)
      .then((r) => r.json())
      .then((r) => r);
    return {
      sunrise: sunrise,
      sunset: sunset,
    };
  }

  async function showBackround(city, actualTime) {
    const bg = document.querySelector(".welcome-side");
    const clock = document.querySelector(".clock__welcome");
    const icon = document.querySelector(".fa-sun");

    const dayTime = getSunsetAndSunrise(url, city)
      .then((result) => result)
      .catch(() => console.log("sth wrong"));

    let { sunrise, sunset } = await dayTime;

    sunset = sunset.split(":").join("");
    sunrise = sunrise.split(":").join("");
    actualTime = actualTime.split(":").join("");

    if (actualTime > sunrise && actualTime < sunset) {
      const toLight = bg.style.backgroundImage.replace("dark", "light");
      bg.style.backgroundImage = toLight;
      clock.textContent = " Good morning,";
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      const toDark = bg.style.backgroundImage.replace("light", "dark");
      bg.style.backgroundImage = toDark;
      clock.textContent = " Good night,";
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }

  getNewLocationAndTime();
})();
