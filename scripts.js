(function () {
  const welcomeSide = document.querySelector(".welcome-side");
  const widthDevice = window.innerWidth;

  window.addEventListener("resize", changePhoto);
  window.addEventListener("DOMContentLoaded", changePhoto);

  function changePhoto(e) {
    const width = e.target.innerWidth;
    if (width >= 440 || widthDevice >= 440) {
      welcomeSide.style.backgroundImage =
        'url("../../images/bg-light-big.jpg")';
    } else {
      welcomeSide.style.backgroundImage =
        'url("../../images/bg-light-small.jpg")';
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
      const newPadding = width - minDeviceWidth + padding;

      welcomeSide.style.paddingRight =
        newPadding <= maxPadding ? newPadding + "px" : "1042px";
    } else {
      welcomeSide.style.paddingRight = "7%";
    }
  }
})();
