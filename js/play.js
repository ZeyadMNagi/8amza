const play = (num) => {

  document.getElementById("dash").style.display = "none";
  document.getElementById("nextBtn").style.display = "block";
  document.getElementById("r").style.display = "flex";

  // Randomly assign roles ensuring no duplicates
  while (
    det === oldDet ||
    im === oldIm ||
    sp === oldSp ||
    det === im ||
    det === sp ||
    im === sp
  ) {
    im = Math.floor(Math.random() * num) + 1;
    det = Math.floor(Math.random() * num) + 1;
    sp = Math.floor(Math.random() * num) + 1;
  }

  oldDet = det;
  oldIm = im;
  oldSp = sp;

  // Assign roles to players
  playersId.forEach((player, id) => {
    player.id = id + 1;
    if (player.id === im) {
      player.type = "الغماز👁️";
    } else if (num >= 4 && player.id === det && newRules) {
      player.type = "المحقق🕵️";
    } else if (num >= 5 && player.id === sp && newRules) {
      player.type = "الجاسوس🕶️";
    } else {
      player.type = "لاعب👥";
    }
  });

  players.innerHTML = "";
  // Populate player names and select options
  playersId.forEach((player, i) => {
    player.name = inputs[i].value;
    players.innerHTML += `<option value="${i}">${
      player.name ? player.name : player.id
    }</option>`;
  });

  pass.innerText = playersId[0].name
    ? `نبدأ ب ${playersId[0].name}`
    : "ادي للاعب رقم 1";
};
