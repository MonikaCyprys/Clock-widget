(function () {
  const bg = document.querySelector(".welcome-side");

  window.addEventListener("resize", changePhoto);
  window.addEventListener("load", changePhoto);

  function changePhoto(e) {
    const widthDevice = window.innerWidth;
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
  window.addEventListener("load", changePadding);

  function changePadding(e) {
    const widthDevice = window.innerWidth;
    const padding = 42;
    const minDeviceWidth = 600;

    const width =
      e.target.innerWidth === undefined ? widthDevice : e.target.innerWidth;

    if (widthDevice > minDeviceWidth || width > minDeviceWidth) {
      bg.style.paddingRight = padding + (widthDevice - minDeviceWidth) + "px";
    } else {
      bg.style.paddingRight = "7%";
    }
  }
})();
