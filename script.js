function convert(){
    var fromUnit=document.getElementById('fromUnit').value;
    var toUnit=document.getElementById('toUnit').value;
    var temperature=parseFloat(document.getElementById('temperature').value);
    var convertedValue;
    var resultUnit;

    //Perform conversion logic
    switch(fromUnit){
        case 'C':
            if (toUnit==='F'){
                convertedValue=(temperature * 9/5) + 32;
                resultUnit='F';
            }
            break;
        case 'F':
            if (toUnit==='C'){
                convertedValue=(temperature - 32) * 5/9;
                resultUnit='C';
            }
            break;
    } 
    document.getElementById('result').value = convertedValue.toFixed(2) + ' ' + resultUnit;
}