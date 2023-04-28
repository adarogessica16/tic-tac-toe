let currentPlayer = "X";
let gameEnd = false;
const cells = document.querySelectorAll(".cells");
const INICIO= document.getElementById('boton-inicio');
const REINICIO= document.getElementById('boton-reiniciar');
const JUGADOR1=document.getElementById('jugador1');
const JUGADOR2=document.getElementById('jugador2');
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

/*-----EVENTOS-----*/
document.getElementById('boton-reiniciar').style.display = "none";
INICIO.addEventListener('click', ()=>{
  jugar();
});
REINICIO.addEventListener('click', ()=>{
  location.reload();
   jugar();
})
function jugar(){
   //Guardar los nombres que se ingresan
   let jugador1= document.getElementById('jugador1').value;
   let jugador2= document.getElementById('jugador2').value;
 //Se verifica si los inputs no estan vacios
   if(jugador1===""|| jugador2===""){
  alert("Debe rellenar con los nombres de jugadores");
  return
}else{
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (gameEnd) {
      return;
    }
    if (cell.textContent === "") {
      cell.textContent = currentPlayer;
      if (checkWin()) {
        gameEnd = true;
        alert(`${currentPlayer} es el ganador!`);
        document.getElementById('boton-inicio').style.display = "none";
        document.getElementById('boton-reiniciar').style.display = "block";
      } else if (checkTie()) {
        gameEnd = true;
        alert("Excelente juego, es un empate!");
        document.getElementById('boton-inicio').style.display = "none";
        document.getElementById('boton-reiniciar').style.display = "block";
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
});
});
}
}
function checkWin() {
//Verificamos si la posición del tablero muestra alguna victoria.
return winConditions.some(condition => {
return condition.every(index => {
  return cells[index].textContent === currentPlayer;
});
});
}

function checkTie() {
//Verificamos que todas las celdas estén ocupadas por alguna ficha.
return Array.from(cells).every(cell => {
return cell.textContent !== "";
  });
}