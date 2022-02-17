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






