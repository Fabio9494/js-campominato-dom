let button = document.querySelector(".btn");

button.addEventListener("click",function(){
    let grid = document.querySelector(".griglia");
    const NUMERO_DI_BOMBE = 16;
    let bombs = arrayBombe(NUMERO_DI_BOMBE);
    let punti = 0;
    console.log(bombs);
    grid.innerHTML=" ";
    for (let i = 0; i < 100; i++) {
        let casellaGriglia = creaCasella(i+1)
        casellaGriglia.addEventListener("click",function(){
            if(bombs.includes(i+1)){
                console.log("La bombaaaaaaaa")
                casellaGriglia.classList.add("bg-danger");
                alert("HAI PERSO")
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
    let punteggio = document.getElementById("punti");
    punteggio.innerText+=" " + punti;
})

// Funzione per creare una casella
function creaCasella(numero){
    let casella = document.createElement('div');
    casella.classList.add("casella");
    casella.innerText = numero;
    return casella;
}

// Funzione per creare una bomba
function generaBombe(array_bombs){
    let numeroBomba;
    let numeroGiaPresente = false;
    while(!numeroGiaPresente){
        numeroBomba = Math.floor(Math.random() * 100 + 1);
        if(array_bombs.includes(numeroBomba)==false){
            numeroGiaPresente = true;
        }
    }
    return numeroBomba;
}

// Funzione per aggiungere una bomba all'array di bombe
function arrayBombe(numero_bombe){
    let bombe=[];
    for(i=0;i<numero_bombe;i++){
        let bomba = generaBombe(bombe);
        bombe.push(bomba);
    }
    return bombe
}