let button = document.querySelector(".btn");

button.addEventListener("click",function(){
    let grid = document.querySelector(".griglia");
    grid.innerHTML=" ";
    for (let i = 0; i < 100; i++) {
        let casellaGriglia = creaCasella(i+1)
        grid.appendChild(casellaGriglia);
        casellaGriglia.addEventListener("click",function(){
            this.classList.toggle("click");
            console.log("casella numero: " + this.innerText);
        })
    }
})

function creaCasella(numero){
    let casella = document.createElement('div');
    casella.classList.add("casella");
    casella.innerText = numero;
    return casella;
}
