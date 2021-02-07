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

// Fonction qui initialise le "playfield" en fonction du nombre de colonnes et de lignes//
function init(x,y){
    var rows = [];
    document.getElementById("playfield").innerHTML = "";
    for (let i = 0; i < x; i++) {
        rows.push(addRow())
        for (let j = 0; j < y; j++) {
            var g = Math.ceil(Math.random()*((x*y)/2))-1;
            while (cnt[g] == 2){
                g = Math.ceil(Math.random()*((x*y)/2))-1;
            }
            cnt[g]++;
            addCard(emojis[g],rows[i],i,j);
        }
    }
}

// Fonction qui gère le click utilisateur //
async function click(elem){
    selected.push(elem);
        if(selected.length == 2){
            if((selected[0].innerText == selected[1].innerText) && !(selected[0].id == selected[1].id)){
                await new Promise(r => setTimeout(r, 700));
                document.getElementById(selected[0].id[0]+"-"+selected[0].id[2]).innerHTML = "";
                document.getElementById(selected[1].id[0]+"-"+selected[1].id[2]).innerHTML = "";
                document.getElementById(selected[0].id[0]+"-"+selected[0].id[2]).classList = ["cardEmpty"];
                document.getElementById(selected[1].id[0]+"-"+selected[1].id[2]).classList = ["cardEmpty"];
                paires++;
                if (paires == (colonnes*lignes)/2) {
                    await new Promise(r => setTimeout(r, 700));
                    document.getElementById("victoire").innerText = "VICTOIRE en "+clicks+" clicks !";
                }
            }
            await new Promise(r => setTimeout(r, 400));
            $(".card").flip(false);
            selected = [];
            
        }
    
}

