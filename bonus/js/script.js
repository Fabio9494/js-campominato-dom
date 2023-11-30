document.querySelector(".btn").addEventListener("click",function(){
    play();
})

function play(){
    let grid = document.querySelector(".griglia");
    let difficolta = document.getElementById("difficolta");
    let livelloDifficolta = parseInt(difficolta.value);
    const NUMERO_BOMBE=16;
    let punti=0;
    let finePartita = 0;
   
    grid.innerHTML=" ";

    let numeroCelle;
    let cellePerRiga;

    switch(livelloDifficolta){
       case 1:
        numeroCelle = 100;
        console.log("uno");
        break;
       case 2:
        numeroCelle = 81;
        console.log("due");
        break;
       case 3:
        numeroCelle = 49;
        console.log("tre");
        break;
       default:
        alert("Seleziona livello")
        break;
    }
    
    cellePerRiga = Math.sqrt(numeroCelle);
    let bombs = arrayBombe(NUMERO_BOMBE , numeroCelle);
    console.log(bombs.sort(function(a, b){return a - b}));
    
    for (let i = 1; i <= numeroCelle; i++) {
        let casellaGriglia = creaCasella(i,cellePerRiga);
        casellaGriglia.addEventListener("click",function(){
            if(finePartita==0)
            if(bombs.includes(i)){
                console.log("La bombaaaaaaaa")
                casellaGriglia.style.backgroundColor = "red";
                alert("HAI PERSO");
                finePartita=1;
                const listaCaselle = document.querySelectorAll(".casella");
                for (let i = 0; i <bombs.length; i++) {
                listaCaselle[bombs[i]-1].style.backgroundColor = "red";
                }
            }
            else{
                casellaGriglia.classList.add("bg-primary");
                console.log("sei stato fortunato");
                punti++;
                let punteggio = document.getElementById("punti");
                punteggio.innerText="PUNTEGGIO: " + punti;
            }
        })
        grid.appendChild(casellaGriglia);
    }
}

//Funzione per creare casella
function creaCasella(numero,cellePerRiga){
    let casella = document.createElement('div');
    casella.classList.add("casella");
    casella.innerText = numero;
    let dimCasella = `calc(100vw / ${cellePerRiga} - 5px)`;
    casella.style.width = dimCasella;
    casella.style.height = dimCasella;
    return casella;
}

// Funzione per creare una bomba
function generaBombe(array_bombs,numeroCelle){
    let numeroBomba;
    let numeroGiaPresente = false;
    while(!numeroGiaPresente){
        numeroBomba = Math.floor(Math.random() * numeroCelle + 1);
        if(array_bombs.includes(numeroBomba)==false){
            numeroGiaPresente = true;
        }
    }
    return numeroBomba;
}

// Funzione per aggiungere una bomba all'array di bombe
function arrayBombe(numero_bombe,numero_celle){
    let bombe=[];
    for(i=0;i<numero_bombe;i++){
        let bomba = generaBombe(bombe,numero_celle);
        bombe.push(bomba);
    }
    return bombe
}
