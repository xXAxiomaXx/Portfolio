document.addEventListener("DOMContentLoaded", function () {
  let percentage = 0;
  const loadingScreen = document.getElementById("loading-screen");
  const loadingPercentage = document.getElementById("loading-percentage");

  const loadingInterval = setInterval(() => {
    if (percentage >= 100) {
      clearInterval(loadingInterval);
      loadingScreen.style.display = "none";
    } else {
      percentage++;
      loadingPercentage.innerText = `${percentage}%`;
      loadingScreen.style.background = `linear-gradient(to right,
        #7a87fb,
        #e281d8,
        #ff8faf,
        #ffb096,
        #ffd49c ${percentage}%, black ${percentage}%)`;
    }
  }, 10);
});
