let seuVotoPara = document.querySelector(".d-1-1 span");
let cargo = document.querySelector(".d-1-2 span");
let descricao = document.querySelector(".d-1-4");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector(".d-1-right");
let numeros = document.queryCommandValue(".d-1-3");

//Função dos botões do teclado
function clicou(n){
  alert("Clicou em " +n);
}

//Funções dos botões de controle
function branco(n){
  alert("Clicou em Branco");
}

function corrige(n){
  alert("Clicou em Corrige");
}

function confirma(n){
  alert("Clicou em confirma");
}