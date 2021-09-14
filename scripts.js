(function () {
  const bg = document.querySelector("main");

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
})();
