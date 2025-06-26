function funktion1(){
    document.getElementById("überschrift1").style.color = "black";
    document.getElementById("überschrift2").style.color = "black";
    document.getElementById("überschrift2").innerHTML ="Eine Helle Website";
    document.getElementById("Zeile1").innerHTML ="<br>";
    document.getElementById("Zeile2").innerHTML ="<br>";
    document.getElementById("hell").innerHTML = "VIEL ZU HELL!";
    document.getElementById("text").innerHTML= "Such in der unteren rechten Ecke nach einer angenehmeren Lösung"
    document.getElementById("button").style.backgroundColor = "white";
    document.getElementById("button").innerHTML = "";
    document.getElementById("button1").innerHTML = "Dunkelheit!";
    document.getElementById("button1").style.color = "white";
    document.getElementById("button1").style.backgroundColor = "grey";
    document.getElementById("button2").innerHTML = "Perfekt!";
    document.getElementById("button2").style.color = "rgb(250, 250, 230)";
    document.getElementById("button2").style.backgroundColor = "rgb(255, 255, 255)";


}
function body1(){
    document.getElementById("body1").style.backgroundColor= "white";
    funktion1();
}

function funktion2(){
    document.getElementById("überschrift1").style.color = "white";
    document.getElementById("überschrift2").style.color = "white";
    document.getElementById("überschrift2").innerHTML ="Eine Dunkle Website";
    document.getElementById("Zeile1").innerHTML ="Hier ist alles dunkel";
    document.getElementById("Zeile2").innerHTML ="Findest du den Knopf, um alles wieder hell zu machen?";
    document.getElementById("hell").innerHTML = "";
    document.getElementById("text").innerHTML= "";
    document.getElementById("button").style.backgroundColor = "grey";
    document.getElementById("button").innerHTML = "Licht!";
    document.getElementById("button").style.color = "black";
    document.getElementById("button1").innerHTML = "";
    document.getElementById("button1").style.backgroundColor = "black";
    document.getElementById("button2").innerHTML = "";
    document.getElementById("button2").style.backgroundColor = "black";
}
function body2(){
    document.getElementById("body1").style.backgroundColor= "black";
    funktion2();
}
function funktion3(){
    document.getElementById("hell").innerHTML = "Du hast es geschafft!";
    document.getElementById("text").innerHTML= "Danke für dein Mitspielen!";
    document.getElementById("button1").innerHTML = "";
    document.getElementById("button1").style.backgroundColor = "rgb(252, 255, 233)";
}
function body3(){
    document.getElementById("body1").style.backgroundColor= "rgb(252, 255, 233)";
    funktion3();
}
