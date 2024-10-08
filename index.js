
let contador = 0
let countEl= document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function aumentar(){
    contador +=     1
    countEl.textContent=contador
}
function save(){
    let ingresosTotales = contador + " - " 
    saveEl.textContent += ingresosTotales
    countEl.textContent=0
    contador= 0

}





