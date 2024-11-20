var MaDiv1=document.getElementById("MaDiv1");
function ModifText(texte){
var div=document.getElementsByName("div");
alert("je vais modifier la div");
MaDiv1.innerHTML=texte;
function ModifText(texte){
for(var i=0;i<div.length;i++){
div[i].innerHTML=texte;
}
}
ModifText("Hello");