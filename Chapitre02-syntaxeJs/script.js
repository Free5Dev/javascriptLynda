// boite de dialogue dans la page
alert("Hello it's my best website page");
// les messages dans la console
console.log("Hello it's my console");//il ya aussi console.debug,console.info,console.warn,console.error
// les variables en js
var nom="said";
console.log(nom);
// pluzsieurs variables sur une même ligne
var age=20,bol=true;
console.log(age);
console.log(bol);
// changement de la valeur d'une variable 
age=26;
console.log("Bonjour Mr "+nom+" vous avez maintenant "+age+" ans");
// les operateurs en js
var a=2;b=3,c=5,d=5;
console.log(a=b);//assignation de la valeur de b à a
a+=b;
console.log(a);
// les structures conditionnelles 
var amount=500;
if(amount>1000){
    console.log("Amount est superieur à 1000");
}else{
    console.log("Amount est inferieur à 1000");
}
// même chose avec les choix terniaires
var avoir=5200;
avoir>1000? console.log("Avoir est superieur à 1000"): console.log("avoir est inferieur à 1000");
// les boucles en while
var i=1;
while(i<10){
    console.log(i);
    i++;
}
console.log("Fin de boucle while");
// les boucles en do while
var j=1;
do{
    console.log(j);
    j++;
}while(j<10);
console.log("Fin de boucle do while");
// boucle avec for
for(var cpt=1; cpt<10;cpt++){
    console.log(cpt);
}
console.log("Fin de boucle for");
// les function en js
function moyenne(a,b){//creation de la function moyenne
    var result=(a+b)/2;
    return result;
}
// appel de la fucntion moyenne
var calcul=(6,8);
console.log("La moyenne est :"+calcul);