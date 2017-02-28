// variabel for overordnet element til samkøring med json
var valgte;
// variabel for tekst
var info;
// variabel for basisfarve
var farve;
// variabel for underliggende element til farveskift
var aktiv;

//1. Load svg fil
$('#people').load('personer.svg', folkHentet);

function folkHentet() {
    console.log("folkHentet");

    //2. load JSON
    $.getJSON('gruppe13.json', dataHentet);
}


//3. sæt tekstvariabel og aktiver mouseevents
function dataHentet(data) {
    console.log("dataHentet");
    info = data;
    $('#people svg g g').on("mouseenter", onEnter);
    $('#people svg g g').on("mouseleave", onOut);
}


//4. handlinger ved mouseenter
function onEnter(e) {
    console.log("handlinger ved mouseenter", e);

    aktiv =	$(e.currentTarget).children();
    valgte = $(e.currentTarget).attr('id');
    //sæt highlightfarve ved mouseover
    farve =	aktiv.attr('fill');
    $(aktiv).attr('fill', '#123456');

    //vis tekst fra json
    $.each(info, visTekst);
    //info.forEach(visTekst);
}
    //5. handlinger ved mouseleave

function onOut(mouse) {
    console.log("mouseleave", mouse);
    //fjern highlightfarve
    $(aktiv).attr('fill', farve);

}

function visTekst(val) {
    console.log("visTekst", val);

    if (val.id === valgte) {

        document.querySelector("#text h3").textContent = val.fornavn;
        document.querySelector("#text p").textContent = val.beskrivelse;

    }
}








