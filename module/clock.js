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
      time: current_time,
    };
  }
  const location = getLocationAndTime(url)
    .then((result) => result)
    .catch(() => console.log("sth wrong"));

  async function getNewLocationAndTime() {
    const { city, country, time } = await location;
    showDataLocation(city, country);
    showDataTime(time);
    
  }

  function showDataLocation(city, country) {
    const location = document.querySelector(".clock__location");
    location.textContent = `${city}, ${country}`;
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
  }

  getNewLocationAndTime();
})();
