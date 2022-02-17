var money = document.getElementById("icon-cash");
var saldo = document.getElementById("saldo");



money.addEventListener('click', function(){
    money.style.display= "none";
    
})
saldo.addEventListener('click', function(){
    money.style.display= "block";
})

var mainMenu = document.getElementById('mainMenu');
var spaceMenu = document.getElementById('menu-space');
var foto = document.getElementById("foto");

spaceMenu.addEventListener('click', function(){
    spaceMenu.style.display="none";
    mainMenu.style.display = "block";
})
foto.addEventListener('click', function(){
    spaceMenu.style.display="block";
    mainMenu.style.display="none";
})

/* Quando clicar no botão "Enviar Gastos o PIG muda a imagem "*/
var pigDollar = document.getElementById("pig-dollar");
var pigCoin= document.getElementById("pig-coin");
var simplePig = document.getElementById("simple-pig")
var gastosButton= document.getElementById("gastos-button");

gastosButton.addEventListener('click', function(){
    
    simplePig.style.display= "none";
    pigDollar.style.display="block";
})








