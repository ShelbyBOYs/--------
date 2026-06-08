"use strict";

let credits = Number(localStorage.getItem("credits")) || 0;
let duiktcoins = Number(localStorage.getItem("duiktcoins")) || 0;
let clickValue = Number(localStorage.getItem("clickValue")) || 1;
let autoClick = Number(localStorage.getItem("autoClick")) || 0;
let passiveIncome = Number(localStorage.getItem("passiveIncome")) || 0;
let multiplier = Number(localStorage.getItem("multiplier")) || 1;
let isBlocked = false;

const creditsText = document.getElementById("credits");
const duiktcoinsText = document.getElementById("duiktcoins");
const clickBtn = document.getElementById("clickBtn");
const effectText = document.getElementById("effectText");

function saveGame() {
    localStorage.setItem("credits", credits);
    localStorage.setItem("duiktcoins", duiktcoins);
    localStorage.setItem("clickValue", clickValue);
    localStorage.setItem("autoClick", autoClick);
    localStorage.setItem("passiveIncome", passiveIncome);
    localStorage.setItem("multiplier", multiplier);
}

function updateScreen() {
    creditsText.textContent = Math.floor(credits);
    duiktcoinsText.textContent = duiktcoins;
    saveGame();
}

clickBtn.addEventListener("click", function () {
    if (!isBlocked) {
        credits += clickValue * multiplier;
        updateScreen();
    }
});

document.getElementById("upgradeClick").addEventListener("click", function () {
    if (credits >= 50) {
        credits -= 50;
        clickValue += 1;
        updateScreen();
    }
});

document.getElementById("autoClicker").addEventListener("click", function () {
    if (credits >= 100) {
        credits -= 100;
        autoClick += 1;
        updateScreen();
    }
});

document.getElementById("passiveIncome").addEventListener("click", function () {
    if (credits >= 150) {
        credits -= 150;
        passiveIncome += 2;
        updateScreen();
    }
});

document.getElementById("comboUpgrade").addEventListener("click", function () {
    if (credits >= 200) {
        credits -= 200;
        multiplier += 1;
        updateScreen();
    }
});

document.getElementById("bonusUpgrade").addEventListener("click", function () {
    if (credits >= 300) {
        credits -= 300;
        clickValue += 5;
        updateScreen();
    }
});

document.getElementById("caseBtn").addEventListener("click", function () {
    const bonus = Math.floor(Math.random() * 200) + 50;
    credits += bonus;
    effectText.textContent = "Кейс дав +" + bonus + " кредитів";
    updateScreen();
});

document.getElementById("wheelBtn").addEventListener("click", function () {
    const prizes = [100, 200, 300, -50];
    const prize = prizes[Math.floor(Math.random() * prizes.length)];
    credits += prize;

    if (credits < 0) {
        credits = 0;
    }

    effectText.textContent = "Колесо фортуни: " + prize + " кредитів";
    updateScreen();
});

document.getElementById("virusBtn").addEventListener("click", function () {
    isBlocked = true;
    effectText.textContent = "Вірус! Клік заблоковано на 5 секунд";

    setTimeout(function () {
        isBlocked = false;
        effectText.textContent = "Ефектів немає";
    }, 5000);
});

document.getElementById("prestigeBtn").addEventListener("click", function () {
    if (credits >= 1000) {
        duiktcoins += Math.floor(credits / 1000);
        credits = 0;
        clickValue = 1;
        autoClick = 0;
        passiveIncome = 0;
        multiplier = 1 + duiktcoins * 0.1;
        updateScreen();
    }
});

document.getElementById("skinDefault").addEventListener("click", function () {
    document.body.style.background = "white";
    document.body.style.color = "black";
});

document.getElementById("skinDark").addEventListener("click", function () {
    if (credits >= 500 || duiktcoins >= 1) {
        document.body.style.background = "#111";
        document.body.style.color = "white";
    }
});

setInterval(function () {
    credits += autoClick + passiveIncome;
    updateScreen();
}, 1000);

updateScreen();