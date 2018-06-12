let url = "http://pilnas.adresas/i/java/koda/";
let jsonObjektas = {};

function surinktiDuomenis() {
    jsonObjektas.vardas = $('[name="vardas"]').val();
    jsonObjektas.pavarde = $('[name="pavarde"]').val();
    jsonObjektas.zinute = $('[name="zinute"]').val();
}

function siustiDuomenis() {
    surinktiDuomenis();
    console.log("Requestas: " + JSON.stringify(jsonObjektas));

    $.post( url, jsonObjektas)
        .done(function( data ) {
            console.log( "Response: " + JSON.stringify(data) );
        })
        .fail(function(data) {
            console.log( "ERROR Response: " + JSON.stringify(data) );
    });
}

$('[type="submit"]').click(function(){
    siustiDuomenis();
});