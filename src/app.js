/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
console.log("entre al archivo");
window.onload = function() {
  //write your code here
  console.log("entre a la funcion");
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "K", "Q"];
  let palos = ["♦", "♥", "♠", "♣"];
  let randomElements = function(array) {
    let aleatorio = array[Math.floor(Math.random() * array.length)];
    console.log(aleatorio);
    return aleatorio;
  };
  let paloArr = document.getElementById("paloArriba");
  let paloAba = document.getElementById("paloAbajo");
  let valor = document.getElementById("valor");
  let palosAleatorios = randomElements(palos);

  paloArr.innerText = palosAleatorios;
  paloAba.innerText = palosAleatorios;
  valor.innerText = randomElements(numeros);
  let corazon = "♥";
  let diamante = "♦";
  if (palosAleatorios == corazon || palosAleatorios == diamante) {
    paloArr.style.color = "red";
    paloAba.style.color = "red";
  }
};
