function ok(newR) {
  newRules = newR;
  mode.style.display = "none";
  newGameHome.style.display = "flex";
  if (newR) {
    document.getElementById("newRulesBtn").style.display = "block";
  } else {
    document.getElementById("nnnn").style.display = "none";
  }
}

const start = (n) => {
  if (n < 3) {
    document.getElementById("war").style.display = "block";
    return;
  }

  // Initialize players
  for (let i = 1; i <= n; i++) {
    playersId.push({ id: i, name: "", type: "", score: 0 });
  }

  inputs = document.getElementsByClassName("PlayerName");
  document.getElementById("playersNo").style.display = "none";

  // Start the game
  play(n);
};
const next = () => {
  if (swipeN <= playersId.length) {
    pass.style.display = passShow ? "block" : "none";
    playerName.style.display = !passShow ? "block" : "none";
    type.style.display = !passShow ? "block" : "none";
    passShow = !passShow;

    let n = Number(playersId[swipeN - 1].id + 1);

    document.getElementById("id").innerText =
      playersId[swipeN - 1].name || swipeN;

    document.getElementById("types").innerText = playersId[swipeN - 1].type;

    pass.innerText = playersId[swipeN - 1].name
      ? "ادي التليفون ل " + playersId[swipeN].name
      : "ادي التليفون ل " + n;

    if (n > playersId.length) {
      pass.innerText = "يلا نبدأ الوقت";
      document.getElementById("nextBtn").innerText = "يلا نبدأ الوقت ⏰";
    }
    if (!passShow) {
      swipeN++;
    }
  } else {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("r").style.display = "none";

    showAndStartTimer(newRules);
  }
};

const lose = (imp) => {
  if (imp) {
    imposter = playersId[im - 1];
    imposter.score++;
  } else {
    detective = playersId[det - 1];
    spy = playersId[sp - 1];
    detective.score++;
    spy.score++;
  }

  document.getElementById("lose").style.display = "none";
  document.getElementById("dash").style.display = "block";

  dash();
};

const dash = () => {
  swipeN = 1;
  det = 0;
  im = 0;

  document.getElementById("ul").innerHTML = "";

  // Display scores and check for losers
  playersId.forEach((player) => {
    let displayScore = donkey.substring(0, player.score);
    document.getElementById("ul").innerHTML += `<div class="playerDash">${
      player.name || "اللاعب"
    } ${player.name ? "" : player.id}: ${displayScore}</div>`;

    if (player.score >= 6) {
      loser.style.display = "block";
      loser.innerText = `${
        player.name || "اللاعب " + player.id
      } Is a DONKEY !!!`;
      document.getElementById("btn").style.display = "none";
    }
  });
};

const show = () => {
  rules.style.display = rulesShow ? "block" : "none";
  rulesShow = !rulesShow;
};

const showInputs = (v) => {
  inputsDiv.innerHTML = "";
  for (let i = 0; i < v; i++) {
    inputsDiv.innerHTML += `
      <div class="holder">
        <label for="${i}">اسم الاعب (${i + 1})</label>
        <input type="text" name="name" class="PlayerName" id="${i}" placeholder="اسم الاعب (${
      i + 1
    })" />
      </div>`;
  }
};

const playerLose = () => {
  let loserId = players.value;
  let p = playersId[loserId];
  p.score++;

  document.getElementById("lose").style.display = "none";
  document.getElementById("dash").style.display = "block";

  dash();
};

function showAndStartTimer(nn) {
  document.getElementById("timer").style.display = "block";
  const timerSection = document.getElementById("timerSection");
  timerSection.style.display = "block";
  startTimer(nn);
  document.querySelector("#finish").addEventListener("click", () => {
    stopTimer(nn);
  });
}

const newGame = () => {
  playersId = [];
  imposter, spy, detective;
  oldIm, oldDet, oldSp;
  det = 0;
  im = 0;
  sp = 0;
  swipeN = 1;
  playersId = [];
  document.getElementById("dash").style.display = "none";
  document.getElementById("playersNo").style.display = "block";
};

const change = () => {
  playersId = [];
  imposter, spy, detective;
  oldIm, oldDet, oldSp;
  det = 0;
  im = 0;
  sp = 0;
  swipeN = 1;
  playersId = [];
  document.getElementById("dash").style.display = "none";
  document.getElementById("mode").style.display = "block";
};
