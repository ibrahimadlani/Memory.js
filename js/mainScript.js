const lignes = 4;
const colonnes = 2;
const emojis = ["🤓","😟","😒","😹","😄","🎃","✌🏽","😳","😭","🤡","👺","🤣","👹","🦫"]

var cnt = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var clicks = 0;
var selected = [];
var paires = 0;

// Fonction qui ajoute des lignes dans le "playfield" //
function addRow(){
    var parent = document.getElementById("playfield");
    var row = document.createElement("div");
    row.classList = ["row"];
    parent.appendChild(row);

    return row
}

