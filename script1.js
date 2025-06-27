function getRandomColor() {
    const colors = [
        "red", "green", "blue", "yellow", "orange",
        "purple", "pink", "cyan", "lime", "brown"
    ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

// Beispiel:

     
function knopf1() {
    let x = setInterval(getRandomColor,500);
}
function knopf2() {
    clearInterval(x)
}
    