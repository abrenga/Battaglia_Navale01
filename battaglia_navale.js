let griglia = [];

let bottone = {
    bottone: document.getElementById(""),
    cliccato: false

};



function creaCella(x, y) {
    let cella = {
        "posizioneX": x,
        "posizioneY": y,
        "selezionato": false,
        "cellaHTML": document.getElementById("")
    };
    return cella;
};


function creaGriglia(sizeX, sizeY) {

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
    let cella = getCell(x, y);

    if (cella != null) {
        posizionaNave(cella);
        tryCell(cella);
    }
}

function getCell(x, y) {
    for (let i = 0; i < griglia.length; i++) {
        const cella = griglia[i];

        if (cella.posizioneX == x && cella.posizioneY == y) {
            return cella;
        }
    }

    return null;
}

function posizionaNave(cella) {
    cella.selezionato = true;
    //cella.cellaHTML.style.backgroundColor = "black";

}


/*avviamo il gioco come?
 ovviamente il gioco si avvia cliccando sul bottone ma voglio collegare l'evento direttamente
al bottone? */
function avviaGioco() {
    grigliaHTLM.cellaHTML.style.backgroundColor = "white";


}


function onclick(bottone) {
    bottone.addEventListener("click", function () {
        onButtonPressed();
        avviaGioco();
        bottone.cliccato = true;
    });

}



function tryCell(cella) {
    if (cella.selezionato == false) {
        console.log("Cella vuota");
        return;
    }

    if (cella.selezionato == true && bottone.cliccato == false) {
        console.log("cella gia' selezionata");
        return;
    }

    if (cella.selezionato == true && bottone.cliccato == true) {
        console.log("Colpita");
        cella.cellaHTML.style.backgroundColor = "red";
        return;
    };

};




/*********************************crea HTML***********************************************/
let container = document.getElementById("container");


function creaCellaHTML() {
    let row = document.createElement("div");
    row.setAttribute("class", "row");

}

/********************************************test************************************* */

function test() {
    creaGriglia(10, 10);
    const cella = getCell(0, 0);

    if (cella.selezionato != false) {
        alert("selezionato non è false")
    }

    selezionaCella(0, 0);

    if (cella.selezionato != true) {
        alert("selezionato non è true")
    }

    alert("Perfetto, sei top!");



}

test();