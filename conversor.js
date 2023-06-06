document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert(){
    var farenheit = document.getElementById('farenheit').value;
    var celsius = document.getElementById('celsius').value;
   
    if(isNaN(farenheit) || isNaN(celsius)){
        alert("Digite um valor válido!")
        return
    }else if(farenheit === ''){
        farenheit = (parseFloat(celsius) *1.8) +32;
    }else if(celsius === ''){
        celsius = (parseFloat(farenheit) - 32)/1.8;
    }

    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
    document.getElementById("farenheit").value = parseFloat(farenheit).toFixed(1); 
}

function clearForm(){
    document.getElementById("celsius").value = "";
    document.getElementById("farenheit").value = "";
}
