var sivuvaihto = document.getElementById("vaihdasivubtn");
sivuvaihto.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#divtoinen").classList.add("active")
}
var toisensivunvaihto = document.getElementById("vaihdasivubutton")
toisensivunvaihto.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#divkolmas").classList.add("active")
}
var kolmannensivunvaihto = document.getElementById("vaihdasivubuttoni");
kolmannensivunvaihto.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#divhome").classList.add("active")
}
var etusivulle = document.getElementById("vaihda");
etusivulle.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#divhome").classList.add("active")
}
var etusivulle2 = document.getElementById("vaihda2");
etusivulle2.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#divhome").classList.add("active")
}