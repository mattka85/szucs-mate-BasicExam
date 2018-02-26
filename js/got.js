function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}


function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = JSON.parse(xhttp.responseText);
    console.log(userDatas);
    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */
   generateLiving(userDatas);    
}
    // Írd be a json fileod nevét/útvonalát úgy, ahogy nálad van
    getData('/json/got.json', successAjax);

    // Live servert használd mindig!!!!!
    /* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */
    
    function generateLiving(characters) {
       var livingCharacters = [];
        for (var j = 0; j < characters.length; j++) {
            if (characters[j].dead !== true) {
                livingCharacters.push(characters[j]);
            }
        }
        generateCharacters(livingCharacters);
    }
    
    function generateCharacters(characters) {
        var container = document.getElementById('sor');
        container.innerHTML = '';
        for (var k = 0; k < characters.length; k++) {
            container.innerHTML += `<div class ="container"><img src = "${characters[k].portrait}">
                                    <p>${characters[k].name}</p>
                                    </div>`;
        }
    }
    document.getElementById("info").addEventListener("click", function(){
var sideElement = document.getElementsByClassName('side');
sideElement.innerHTML = '';
for (g in characters){

if (characters[g].name = info)
container.innerHTML
}
    })