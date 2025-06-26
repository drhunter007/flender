function funktion1(){
    document.getElementById("überschrift1").style.color = "black";
    document.getElementById("überschrift2").style.color = "black";
    document.getElementById("überschrift2").innerHTML ="Eine Helle Website";
    document.getElementById("Zeile1").innerHTML ="<br>";
    document.getElementById("Zeile2").innerHTML ="<br>";
    document.getElementById("hell").innerHTML = "VIEL ZU HELL!";
    document.getElementById("text").innerHTML= "Such in der unteren rechten Ecke nach einer angenehmeren Lösung"

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
    document.getElementById("text").innerHTML= ""

}
function body2(){
    document.getElementById("body1").style.backgroundColor= "black";
    funktion2();
}
function funktion3(){
    document.getElementById("überschrift1").style.color = "black";
    document.getElementById("überschrift2").style.color = "black";
    document.getElementById("überschrift2").innerHTML ="Eine Helle Website";
    document.getElementById("Zeile1").innerHTML ="";
    document.getElementById("Zeile2").innerHTML ="";
    document.getElementById("Zeile1").style.color = "black";
    document.getElementById("Zeile2").style.color = "black";

}

function body3(){
    document.getElementById("body1").style.backgroundColor= "rgb(252, 255, 233)";
    funktion3();
}
function body1(){
    document.getElementById("body1").style.backgroundColor= "white";
    document.getElementById("body1").classList.add("lightmode");
    funktion1();
}
function body2(){
    document.getElementById("body1").style.backgroundColor= "black";
    document.getElementById("body1").classList.remove("lightmode");
    funktion2();
}
function body3(){
    document.getElementById("body1").style.backgroundColor= "rgb(252, 255, 233)";
    document.getElementById("body1").classList.add("lightmode");
    funktion3();
}