let intervalId1 = null;
let intervalId2 = null;
let intervalId3 = null;

function getRandomColor() {
    const colors = [
        "red", "green", "blue", "yellow", "orange",
        "purple", "pink", "cyan", "lime", "brown"
    ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
function knopf1() {
    if (intervalId1 === null) {
        intervalId1 = setInterval(() => {
            document.getElementById("div1").style.backgroundColor = getRandomColor();
            checkWin();
        }, 100);
    }
}
function knopf2() {
    clearInterval(intervalId1);
    intervalId1 = null;
    checkWin();
}
function knopf3() {
    if (intervalId2 === null) {
        intervalId2 = setInterval(() => {
            document.getElementById("div2").style.backgroundColor = getRandomColor();
            checkWin();
        }, 100);
    }
}
function knopf4() {
    clearInterval(intervalId2);
    intervalId2 = null;
    checkWin();
}
function knopf5() {
    if (intervalId3 === null) {
        intervalId3 = setInterval(() => {
            document.getElementById("div3").style.backgroundColor = getRandomColor();
            checkWin();
        }, 100);
    }
}
function knopf6() {
    clearInterval(intervalId3);
    intervalId3 = null;
    checkWin();
}
function checkWin() {
    const color1 = document.getElementById("div1").style.backgroundColor;
    const color2 = document.getElementById("div2").style.backgroundColor;
    const color3 = document.getElementById("div3").style.backgroundColor;

    if (
        intervalId1 === null &&
        intervalId2 === null &&
        intervalId3 === null &&
        color1 && color1 === color2 && color2 === color3
    ) {
        document.getElementById("text3").style.opacity = "1";
        document.getElementById("text2").style.opacity = "1";
    } else {
        document.getElementById("text3").style.opacity = "0";
        document.getElementById("text2").style.opacity = "0";
    }
}
window.onload = function() {
    document.getElementById("text3").style.opacity = "0";
    document.getElementById("text2").style.opacity = "0";
}