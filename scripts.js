(function () {
  const bg = document.querySelector(".welcome-side");
  const widthDevice = window.innerWidth;

  window.addEventListener("resize", changePhoto);
  window.addEventListener("DOMContentLoaded", changePhoto);

  function changePhoto(e) {
    const width = e.target.innerWidth;
    if (width >= 440 || widthDevice >= 440) {
      const toBig = bg.style.backgroundImage.replace("small", "big");
      bg.style.backgroundImage = toBig;
    } else {
      const toSmall = bg.style.backgroundImage.replace("big", "small");
      bg.style.backgroundImage = toSmall;
    }
  }
  window.addEventListener("resize", changePadding);
  window.addEventListener("DOMContentLoaded", changePadding);

  function changePadding(e) {
    const padding = 42;
    const maxPadding = 1000 + padding;
    const minDeviceWidth = 600;

    const width =
      e.target.innerWidth === undefined ? widthDevice : e.target.innerWidth;

    if (widthDevice > minDeviceWidth || width > minDeviceWidth) {
      const newPadding = width - minDeviceWidth - padding;

      bg.style.paddingRight =
        newPadding <= maxPadding ? newPadding + "px" : "1042px";
    } else {
      bg.style.paddingRight = "7%";
    }
  }
})();
