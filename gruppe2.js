var valgte;
var info;


window.addEventListener("load", sidenVises);

function sidenVises() {
    // load SVG ind i #malebog
    "use strict";
    $("#people").load("personer.svg", harLoadetSVG);
}

function harLoadetSVG() {
    // find ud af hvilke farver vi klikker på

    "use strict";
    $.getJSON("gruppe13.json", harLoadetJSON);

}


function harLoadetJSON(data) {
console.log("har loaded");

var elementer = document.querySelectorAll("#personer g");

elementer.forEach(tilfojKlik);

}

function tilfojKlik(xxx) {
"use strict";
console.log("xxx er: ", xxx);
xxx.addEventListener("click", klikPaaPerson);
}


function klikPaaPerson(yyy) {
console.log("klikket på person", yyy);
$.each(info, visTekst);


}


function visTekst(val) {
    console.log("visvis text");

    "use strict";
    if (val.id === valgte) {

        document.querySelector("#text h3").textContent = val.fornavn;
        document.querySelector("#text p").textContent = val.beskrivelse;

        console.log("hvor tekst");

    }
}









//    document.querySelector("#farver rect").setAttribute("fill", "red");
//
//    var rects = document.querySelectorAll("#farver rect");
//    rects.forEach(registrerKlik);
//
//
//    // find ud af hvilke former vi klikker på
//    var former = document.querySelectorAll("#former *");
//    former.forEach( registrerFormKlik );
//
//    // fyld formen med den farve vi sidst klikkede på
//}
//
//
//function registrerFormKlik( form ) {
//form.addEventListener("click", vaelgForm);
//}
//
//function vaelgForm ( event ){
//var form = event.target;
//form.setAttribute("fill", valgtfarve);
//
//}
//
//function registrerKlik( rect ) {
//rect.addEventListener("click", vaelgFarve);
//}
//
//
//
//
//function vaelgFarve( event ) {
//// find ud af hvilken farver der blev klikket på
//console.log(event);
//
//    var rect = event.target;
//    var farve = rect.getAttribute("fill");
//
//    valgtfarve = farve;
//}
//
//var valgtfarve;
//
//
//
