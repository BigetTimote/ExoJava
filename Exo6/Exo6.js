window.addEventListener('resize', function() {
    if (window.innerWidth < 800) {
        alert("La largeur de ta fenêtre est trop petite !");
    }
});
var demande=prompt("Entrez un nombre");
var i=0;
var resultat = 0;
for(i=0;i<=demande;i++){
    resultat += i;
}
alert(resultat);