function startTimer(nn) {
  let currentValue = 90;
  const duration = 90;
  const endValue = 0;
  const speed = 1000;

  const innerCircleColor = circularProgress.getAttribute(
    "data-inner-circle-color"
  );
  const bgColor = circularProgress.getAttribute("data-bg-color");

  innerCircle.style.backgroundColor = innerCircleColor;
  circularProgress.style.backgroundColor = bgColor;

  function getProgressColor(value) {
    const red = Math.floor(255 - (value / duration) * 255);
    const green = Math.floor((value / duration) * 255);
    return `rgb(${red}, ${green}, 0)`;
  }

  countdown = setInterval(() => {
    const percentage = (currentValue / duration) * 100;
    const progressColor = getProgressColor(currentValue);

    progressValue.textContent = `${currentValue}s`;
    progressValue.style.color = progressColor;

    circularProgress.style.background = `conic-gradient(${progressColor} ${
      percentage * 3.6
    }deg, ${bgColor} 0deg)`;

    if (currentValue === endValue) {
      clearInterval(countdown);
      progressValue.textContent = "Time's up!";

      setTimeout(() => {
        document.getElementById("r").style.display = "none";
        document.getElementById("lose").style.display = "block";
        document.getElementById("det").style.display = "block";
        if (playersId.length <= 4 || !nn) {
          document.getElementById("imp").style.width = "100%";
          document.getElementById("det").style.display = "none";
        }
      }, 5000);
      document.getElementById("timer").style.display = "none";
    }

    currentValue--;
  }, speed);
}

function stopTimer(nn) {
  clearInterval(countdown);
  document.getElementById("r").style.display = "none";
  document.getElementById("lose").style.display = "block";
  document.getElementById("det").style.display = "block";
  if (playersId.length <= 4 || !nn) {
    document.getElementById("det").style.display = "none";
    document.getElementById("imp").style.width = "100%";
  }
  document.getElementById("timer").style.display = "none";
}
