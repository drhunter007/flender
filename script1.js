function getRandomColor() {
    const colors = [
        "red", "green", "blue", "yellow", "orange",
        "purple", "pink", "cyan", "lime", "brown"
    ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

// Beispiel:
document.body.style.backgroundColor = getRandomColor();
function looping1() {
   while (stop !=true) {
    x= getRandomColor();
    document.getElementById("body1").style.backgroundColor = x;
}
     
}
function knopf1() {
    looping1();
}
    document.getElementById("button1").innerHTML = "Stop!";
    document.getElementById("button1").style.backgroundColor = "rgb(130, 150, 1)";
    