function res() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const nombre1 = urlParams.get('nombre1');
    const nombre2 = urlParams.get('nombre2');
    const operation = urlParams.get('operation');
    const resultats = urlParams.get('resultats');

    document.getElementById('nombre1Span').innerHTML = nombre1;
    document.getElementById('nombre2Span').innerHTML = nombre2;
    document.getElementById('operationSpan').innerHTML = operation;
    document.getElementById('resultatsSpan').innerHTML = resultats;
}

window.onload = res;

function vider(){
    document.getElementById('nombre1Span').innerHTML = "";
    document.getElementById('nombre2Span').innerHTML = "";
    document.getElementById('operationSpan').innerHTML = "";
    document.getElementById('resultatsSpan').innerHTML = "";
}
function retour(){
    window.location.href = 'index.html';
}
