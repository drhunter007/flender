function getRandomColor() {
    const colors = [
        "red", "green", "blue", "yellow", "orange",
        "purple", "pink", "cyan", "lime", "brown"
    ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

// Beispiel:

     let x;
function knopf1() {
     clearInterval(x);
    x = setInterval(function() {
        document.getElementById("div1").style.backgroundColor = getRandomColor();
    }, 100);
}
function knopf2() {
    clearInterval(x);
}
if(document.getElementById("button1").style.backgroundColor === document.getElementById("batton1").style.backgroundColor === document.getElementById("betton1").style.backgroundColor) {
    document.getElementById("text3").style.display = "block";
    document.getElementById("text2").style.display = "block";
}
