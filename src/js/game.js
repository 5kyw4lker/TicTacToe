"use strict";

// Spielfiguren aus URL lesen
let urlanhang = window.location.search.split("?"); 
let array_Figuren = urlanhang[1].split("&");
let src_spiel_figur_1 = array_Figuren[0];
let src_spiel_figur_2 = array_Figuren[1];

let gewinner;
let spiel_zuende = false;
let spieler_1_am_Zug = true;
let punkte_zaehlen_spieler_1 = 0;
let punkte_zaehlen_spieler_2 = 0;

let array_spieler_1 = [];
let array_spieler_2 = [];

let sieg = [
        ["0","1","2"],
        ["3","4","5"],
        ["6","7","8"],
        ["0","3","6"],
        ["1","4","7"],
        ["2","5","8"],
        ["0","4","8"],
        ["2","4","6"]
];

// Spielfiguren unter Spielfeld erzeugen
let figur_spieler_1 = document.getElementById("pic-sieg-zaehler-spieler-1");
figur_spieler_1.setAttribute("src", src_spiel_figur_1);
let figur_spieler_2 = document.getElementById("pic-sieg-zaehler-spieler-2");
figur_spieler_2.setAttribute("src", src_spiel_figur_2);

figur_spieler_1.style.animation = "pulsieren 1s ease 0s infinite";


// img fuer Spielfigur erzeugen
function bild_figur_1_setzten() {
    let img_figure_1 = document.createElement("img");
    img_figure_1.setAttribute("src", src_spiel_figur_1);
    img_figure_1.setAttribute("class", "img");
    img_figure_1.setAttribute("id", "img_figure_1");
    return img_figure_1;
}

function bild_figur_2_setzten() {
    let img_figure_2 = document.createElement("img");
    img_figure_2.setAttribute("src", src_spiel_figur_2);
    img_figure_2.setAttribute("class", "img");
    img_figure_2.setAttribute("id", "img_figure_2");
    return img_figure_2;
}

let elemente = document.querySelectorAll(".element");

for(let feld of elemente) {

    feld.addEventListener("click", function(){

        if(spiel_zuende === false) {

            // Zur Prüfung, ob Feld besetzt ist
            let childNode_lenght = feld.childNodes.length;
            if(childNode_lenght === 0) {
                
                // setzte Spielfigur Spieler 1
                if(spiel_zuende === false && spieler_1_am_Zug === true) {

                    let bild_1 = bild_figur_1_setzten();
                    feld.insertAdjacentElement("afterbegin", bild_1);
                    array_spieler_1.push(feld.id);
                    figur_spieler_1.style.animation = "pulsieren 0s ease 0s infinite";
                    figur_spieler_2.style.animation = "pulsieren 1s ease 0s infinite";
                }

                // setzte Spielfigur Spieler 2
                if (spiel_zuende === false && spieler_1_am_Zug === false) {

                    let bild_2 = bild_figur_2_setzten();
                    feld.insertAdjacentElement("afterbegin", bild_2); 
                    array_spieler_2.push(feld.id);
                    figur_spieler_1.style.animation = "pulsieren 1s ease 0s infinite";
                    figur_spieler_2.style.animation = "pulsieren 0s ease 0s infinite";
                } 
                spieler_1_am_Zug = !spieler_1_am_Zug;
                check_spielstand();              
            } else {
            }
        }
    })
}

let check_spielstand = function() {

    for(let i = 0; i < sieg.length; i++) {

        let spieler_1_gewinnt = array_spieler_1.filter(x => sieg[i].includes(x));
        let spieler_2_gewinnt = array_spieler_2.filter(x => sieg[i].includes(x));

        if(spieler_1_gewinnt.length === 3) {

            gewinner = 1;
            punkte_zaehlen_spieler_1 = punkte_zaehlen_spieler_1 + 1;
            document.getElementById("sieg-zaehler-spieler-1").innerHTML = punkte_zaehlen_spieler_1;
     
            // Sieger-Figur gross anzeigen
            let spielfeld = document.getElementsByClassName("spielfeld")[0];
            let bild_1 = bild_figur_1_setzten();
            spielfeld.insertAdjacentElement("afterbegin", bild_1);
            bild_1.style.position = "absolute";
            bild_1.style.justifySelf = "center";
            bild_1.style.alignSelf = "center";
            bild_1.style.gridRow = "1";
            bild_1.style.gridColumn = "1";
            bild_1.style.width = "36vmax";
            bild_1.style.height = "36vmax";

            let remove_winner = function() {
                let img_figure_1 = document.getElementById("img_figure_1");
                img_figure_1.remove();
            }
            setTimeout(function() {remove_winner()}, 1500);

            spiel_ende();
        }
        
        if(spieler_2_gewinnt.length === 3) {

            gewinner = 2;
            punkte_zaehlen_spieler_2 = punkte_zaehlen_spieler_2 + 1;
            document.getElementById("sieg-zaehler-spieler-2").innerHTML = punkte_zaehlen_spieler_2;

            // Sieger-Figur gross anzeigen
            let spielfeld = document.getElementsByClassName("spielfeld")[0];
            let bild_2 = bild_figur_2_setzten();
            spielfeld.insertAdjacentElement("afterbegin", bild_2);
            bild_2.style.position = "absolute";
            bild_2.style.justifySelf = "center";
            bild_2.style.alignSelf = "center";
            bild_2.style.gridRow = "1";
            bild_2.style.gridColumn = "1";
            bild_2.style.width = "30vmax";
            bild_2.style.height = "30vmax";

            let remove_winner = function() {
                let img_figure_2 = document.getElementById("img_figure_2");
                img_figure_2.remove();
            }
            setTimeout(function() {remove_winner()}, 1500);

            spiel_ende();
        }
        
        if(array_spieler_1.length === 5 || array_spieler_2.length === 5) {

            gewinner = 0; // unentschieden
            spiel_ende();
        }
    }
}

let spiel_ende = function() {

    spiel_zuende = true;
    figur_spieler_1.style.animation = "pulsieren 0s ease 0s infinite";
    figur_spieler_2.style.animation = "pulsieren 0s ease 0s infinite";

    if (gewinner === 1) {
        spieler_1_am_Zug = false;
    } 
    
    if (gewinner === 2) {
        spieler_1_am_Zug = true;
    }

    if (gewinner === 0) {
        spieler_1_am_Zug = !spieler_1_am_Zug;
    }

    setTimeout(function() {spiel_starten()}, 1500);
}

let spiel_starten = function() {

    array_spieler_1 = [];
    array_spieler_2 = [];

    for(let felder of elemente) {
        felder.innerHTML = "";
    }

    let los_gehts = function() {

        if (gewinner === 1) {
            figur_spieler_1.style.animation = "pulsieren 0s ease 0s infinite";
            figur_spieler_2.style.animation = "pulsieren 1s ease 0s infinite";
        } 
        
        if (gewinner === 2) {
            figur_spieler_1.style.animation = "pulsieren 1s ease 0s infinite";
            figur_spieler_2.style.animation = "pulsieren 0s ease 0s infinite";
        }

        if (gewinner === 0) {
            if(spieler_1_am_Zug) {
                figur_spieler_1.style.animation = "pulsieren 1s ease 0s infinite";
                figur_spieler_2.style.animation = "pulsieren 0s ease 0s infinite";
            } else {
                figur_spieler_1.style.animation = "pulsieren 0s ease 0s infinite";
                figur_spieler_2.style.animation = "pulsieren 1s ease 0s infinite";
            }
        }

    }
    setTimeout(los_gehts(), 3000);
    spiel_zuende = false; 
}
