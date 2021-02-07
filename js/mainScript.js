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

// Fonction qui ajoute des images dans les lignes //
function addCard(symbole,parent,x,y){
    var card = document.createElement("div");
    var front = document.createElement("div");
    var back = document.createElement("div");
    var symb = document.createElement("p");

    card.classList = ["card"];
    front.classList = ["front"];
    back.classList = ["back"];

    symb.innerText = symbole;
    card.id = x+"-"+y;

    card.appendChild(front);
    card.appendChild(back);
    card.onclick = function() { add(this);click(this); };
    back.appendChild(symb);
    parent.appendChild(card);
}

