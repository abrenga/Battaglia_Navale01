let griglia = [];

let bottone = {
    bottone: document.getElementById(""),
    cliccato: false

};



function creaCella(x, y) {
    let cella = {
        "posizioneX": x,
        "posizioney": y,
        "selezionato": false,
        "cellaHTML": document.getElementById("")
    };
    return cella;
};


function creacraGriglia(sizeX, sizeY) {

    for (let x = 0; x < sizeX; x++) {
        for (let y = 0; y < sizeY; y++) {

            let cella = creaCella(x, y);

            griglia.push(cella);
        };
    };
};



/*Come posso selezionare una cella o meglio un'elemento in un'array?
la cella in questione risulta messa in un'array per 10 volte creando 100 pacchetti di "celle" 
per poter accedere a ciascuna di esse, si puo' pensare di iterare sull'array(tieni presente che il ciclo for non fa altro che partire da un'indice fissato dal programmatore e continuare ad incrementare finchè una condizione non à verificata)
perttanto scorre e incrementa. nient'altro.
per estrapolare l'indice e quindi la cella basterà introdurre in una variabile l'indice.
 */
function selezionaCella(x, y) {
    for (let x = 0; x <= griglia.length; x++) {
        let cella = griglia[x];
        affondaNave(cella)
        if (cella.x == x && cella.y == y) {
            posizionaNave(cella);
            trycell(cella)
        }

    };

};


function posizionaNave(cella) {
    cella.cellaHTML.style.backgroundColor = "black";
    cella.selezionato = "true";
};


/*avviamo il gioco come?
 ovviamente il gioco si avvia cliccando sul bottone ma voglio collegare l'evento direttamente
al bottone? */
function avviaGioco() {
    grigliaHTLM.cellaHTML.style.backgroundColor = "white";


}


function onclick(bottone) {
    bottone.addEventListener("click", function () {
        avviaGioco();
        bottone.cliccato = true;
    });

}



function trycell(cella) {
    if (cella.selezionato == false) {
        alert("Cella vuota");
    } if (cella.selezionato == true && bottone.cliccato == false) {
        alert("cella gia' selezionata");
    } if (cella.selezionato == true && bottone.cliccato == true) {
        alert("Colpita");
        cella.cellaHTML.style.backgroundColor = "red";
    };

};




/*********************************crea HTML***********************************************/
let container = document.getElementById("container");


function creaCellaHTML() {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    
}


creacraGriglia(10, 10);
console.log(griglia);

