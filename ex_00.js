async function asyncFunc() {
    return "Hello World !";}
  console.log(asyncFunc()); //permet de prouver la promesse
  asyncFunc().then(resultat => console.log(resultat)); //l'affichage dans la console 