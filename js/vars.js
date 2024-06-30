// Constants and variables
var imposter, spy, detective;
var oldIm, oldDet, oldSp;
var det = 0,
  im = 0,
  sp = 0;
var swipeN = 1;
var playersId = [];
var pass = document.getElementById("pass");
var playerName = document.getElementById("name");
var type = document.getElementById("type");
var loser = document.getElementById("loser");
var rules = document.getElementById("rules");
var inputsDiv = document.getElementById("inputs");
var players = document.getElementById("players");
var newGameHome = document.getElementById("playersNo");
var modeChoose = document.getElementById("mode");
var inputs;
var rulesShow = true;
var passShow = false;
var countdownElement = document.getElementById("countdown");
const circularProgress = document.querySelector(".circular-progress");
const progressValue = circularProgress.querySelector(".percentage");
const innerCircle = circularProgress.querySelector(".inner-circle");
var countdown;

const donkey = "Donkey";

var newRules;
