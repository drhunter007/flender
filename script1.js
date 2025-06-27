let intervalId = null;
let intervalId1 = null;
let intervalId2 = null;
function getRandomColor() {
    const colors = [
        "red", "green", "blue", "yellow", "orange",
        "purple", "pink", "cyan", "lime", "brown"
    ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
    
}

function knopf1() {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            document.getElementById("div1").style.backgroundColor = getRandomColor();
        }, 100);
    }
}
function knopf2() {
    clearInterval(intervalId);
    intervalId = null;
}
    
function knopf3() {
    if (intervalId1 === null) {
        intervalId1 = setInterval(() => {
            document.getElementById("div2").style.backgroundColor = getRandomColor();
        }, 100);
    }
}
function knopf4() {
    clearInterval(intervalId1);
    intervalId1 = null;
}

function knopf5() {
    if (intervalId2 === null) {
        intervalId2 = setInterval(() => {
            document.getElementById("div3").style.backgroundColor = getRandomColor();
        }, 100);
    }
}
function knopf6() {
    clearInterval(intervalId2);
    intervalId2 = null;
}
if(document.getElementById("div1").style.backgroundColor === document.getElementById("div2").style.backgroundColor && document.getElementById("div3").style.backgroundColor === document.getElementById("betton1").style.backgroundColor) {
    document.getElementById("text3").style.opacity = "1";
    document.getElementById("text2").style.opacity = "1";
}