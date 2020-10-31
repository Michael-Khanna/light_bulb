let swt = document.querySelector("#light-switch");
let sta = document.querySelector("#lightStatus");
let egg = document.querySelector("#easterEgg");
let html = document.querySelector("html");
let eggMessageMain = `You found the `;
let eggMessages = [`up arrow easter egg!!!`, `escape easter egg`];
let img = document.getElementById("#image");
let date = new Date();

let name = prompt(`What is your name?`, "");
let ttl = document.querySelector("#title");

ttl.textContent = `Light Bulb for ${name}`

swt.addEventListener("click", updateSwt);
console.log(`${name} has checked in`)

function updateSwt() {
  if(swt.textContent === "Turn on Light"){
    swt.textContent = "Turn off Light";
    swt.style.backgroundColor = "Yellow";
    console.log("on");
    sta.textContent = "Light is on";
  }
  else{
    swt.textContent = "Turn on Light";
    swt.style.backgroundColor = "Black";
    console.log("off");
    sta.textContent = "Light is off";
  }
}

swt.addEventListener("click",updateConsole);

function updateConsole() {
  if(swt.click === true) {
    console.log("")
  }
  else{
    console.log("swtClick")
  }
}

html.addEventListener("keydown", updateEgg1);

eggMessages.push("g easter egg");

var conEggMess = `easter egg found`;

function updateEgg1() {
   if (event.keyCode == 38/*checks for up arrow press*/) {
    console.log(`up arrow ${conEggMess}`);
    console.log(date);
    alert(eggMessageMain + eggMessages[0]);
    //img.src(download.jpg);
  } else if (event.keyCode == 27) {
    console.log(`esc key ${conEggMess}`);
    console.log(date);
    alert(eggMessageMain + eggMessages[1])
  } else if (event.keyCode == 71) {
    console.log(`g key ${conEggMess}`);
    console.log(date);
    alert(eggMessageMain + eggMessages[2]);
  } else {
    console.log("no egg found :(")
  }
}

html.addEventListener("keydown", consoleUpdate);

function consoleUpdate() {
    if(event.keyCode == 27 || event.keyCode == 38 || event.keyCode == 71) {
      console.log(`egg found`)
    }
}

html.addEventListener("keydown", eggUpdateLight)
function eggUpdateLight() {
  if(event.keyCode == 8){
    swt.textContent = "Turn on Light";
    swt.style.backgroundColor = "Black";
    console.log("off");
    sta.textContent = "Light is off";
  }
}
