"use strict"

window.onload = function() {
    spielerauswahl_2.style.color = "#000";
    spielerauswahl_2.style.backgroundColor = "transparent";
    spielerauswahl_2.style.animation = "pulsieren 0s ease 0s infinite";
    hund_2.style.animation = "pulsieren 0s ease 0s infinite";
    spielerauswahl_1.style.color = "#fff";
    spielerauswahl_1.style.backgroundColor = "#000";
    spielerauswahl_1.style.animation = "pulsieren 1s ease 0s infinite";
    hund_1.style.animation = "pulsieren 1s ease 0s infinite";
}

let ele = document.querySelectorAll(".element");
let spieler_1_sucht_aus = true;
let spielerauswahl_1 = document.querySelector("#spielerauswahl_1");
let spielerauswahl_2 = document.querySelector("#spielerauswahl_2");
let hund_1 = document.querySelector("#hund-1");
let hund_2 = document.querySelector("#hund-2");

for (let i = 0; i < ele.length; i++) {

    let id = ele[i].id; 

    ele[i].addEventListener("click", function(){

        if(spieler_1_sucht_aus) {
            let setze_figur = document.getElementById("hund-1");            
            switch (id) {
                case "0": setze_figur.setAttribute("src", "src/img/rocky.png"); break;
                case "1": setze_figur.setAttribute("src", "src/img/zuma.png"); break;
                case "2": setze_figur.setAttribute("src", "src/img/tracker.png"); break;
                case "3": setze_figur.setAttribute("src", "src/img/everest.png"); break;
                case "4": setze_figur.setAttribute("src", "src/img/liberty.png"); break;
                case "5": setze_figur.setAttribute("src", "src/img/marshall.png"); break;
                case "6": setze_figur.setAttribute("src", "src/img/chase.png"); break;
                case "7": setze_figur.setAttribute("src", "src/img/skye.png"); break;
                case "8": setze_figur.setAttribute("src", "src/img/rubble.png"); break;
            }
        } else {
            let setze_figur = document.getElementById("hund-2");            
            switch (id) {
                case "0": setze_figur.setAttribute("src", "src/img/rocky.png"); break;
                case "1": setze_figur.setAttribute("src", "src/img/zuma.png"); break;
                case "2": setze_figur.setAttribute("src", "src/img/tracker.png"); break;
                case "3": setze_figur.setAttribute("src", "src/img/everest.png"); break;
                case "4": setze_figur.setAttribute("src", "src/img/liberty.png"); break;
                case "5": setze_figur.setAttribute("src", "src/img/marshall.png"); break;
                case "6": setze_figur.setAttribute("src", "src/img/chase.png"); break;
                case "7": setze_figur.setAttribute("src", "src/img/skye.png"); break;
                case "8": setze_figur.setAttribute("src", "src/img/rubble.png"); break;
            }
            check_spieler_vergeben(setze_figur);
        }
    })
}

// Pruefen, ob Figur schon vergeben ist
function check_spieler_vergeben(spieler_img) {

    let figur_spieler_1 = document.getElementById("hund-1").getAttribute("src");
    let figur_spieler_2 = document.getElementById("hund-2").getAttribute("src");
    let img_id = spieler_img.getAttribute("id");

    if(figur_spieler_1 === figur_spieler_2) {
        alert("Paw schon vergeben") 
        if(img_id === "hund-1") {
            spieler_img.setAttribute("src", "src/img/dog.png");
        } else {
            spieler_img.setAttribute("src", "src/img/dog.png");
        }
    }
}

function startGame() {

    // Daten prüfen und Spiele Starten
    let figur_spieler_1 = document.getElementById("hund-1").getAttribute("src");
    let figur_spieler_2 = document.getElementById("hund-2").getAttribute("src");

    // Figur Spieler 1 gewählt --> Spieler 2 Figur wählen lassen
    if(figur_spieler_1 != "src/img/dog.png" && figur_spieler_2 === "src/img/dog.png") {
        spieler_1_sucht_aus = false;
        spielerauswahl_1.style.color = "#000";
        spielerauswahl_1.style.backgroundColor = "transparent";
        spielerauswahl_1.style.animation = "pulsieren 0s ease 0s infinite";
        hund_1.style.animation = "pulsieren 0s ease 0s infinite";
        spielerauswahl_2.style.color = "#fff";
        spielerauswahl_2.style.backgroundColor = "#000";
        spielerauswahl_2.style.animation = "pulsieren 1s ease 0s infinite";
        hund_2.style.animation = "pulsieren 1s ease 0s infinite";
    } 

    if(figur_spieler_1 === "src/img/dog.png") {
        alert("Spieler 1 PAW aussuchen")
    }

    if(figur_spieler_1 !== "src/img/dog.png" && figur_spieler_2 !== "src/img/dog.png") {
        // URL Spielerfiguren anhängen
        let spielfiguren =  figur_spieler_1 + '&' + figur_spieler_2;
        location.replace("game.html?"+spielfiguren);
    }
}













