var num1, num2, result, operation; 

function calculate() {
    num1 = parseInt(document.getElementById('nb1').value);
    num2 = parseInt(document.getElementById('nb2').value);
    result = 0;
    operation = '';
    
    if (document.getElementById('add').checked) {
        operation = 'somme';
        result = num1 + num2;
        // document.getElementById('res').innerHTML = result;
    } else if (document.getElementById('sous').checked) {
        operation = 'soustraction';
        if(num2 > num1) alert('num1 > num2');
        else{
          result = num1 - num2;
        //   document.getElementById('res').innerHTML = result;
    }
          
    } else if (document.getElementById('multi').checked) {
        operation = 'multiplication';
        result = num1 * num2;
       // document.getElementById('res').innerHTML = result;
    } else if (document.getElementById('div').checked) {
        
        if (num2 > num1) {
            alert('num1 > num2');
        } else {
            operation = 'division';
            result = num1 / num2;
         
        }
    }
    document.getElementById('res').innerHTML = result;

}

function Result() {
         
     if (result !== 0 && document.getElementById('res').innerHTML !== '') {
        var url = 'page3.html?nombre1=' + num1 + '&nombre2=' + num2 + '&operation=' + operation + '&resultats=' + result;
        window.location.href = url;
    } else {
        alert('Resultat is empty.');
    }
}

function vider() {
    document.getElementById('nb1').value = '';
    document.getElementById('nb2').value = '';
    document.getElementById('res').innerHTML = '';
    operation = '';
     result = 0;
}
