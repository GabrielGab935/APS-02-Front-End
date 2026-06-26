var titulo = document.querySelector("h1")
			titulo.textContent = "Aparecida Nutricionista"


var pacientes  = document.querySelectorAll(".paciente");
for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];



var pesoEhValido = true;
var alturaEhValido = true;

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
if(peso <= 0 || peso > 635.0) {
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
    tdPeso.textContent = "Peso Inválido!";
}

var tdAltura = paciente.querySelector(".info-altura");
var altura =tdAltura.textContent;
if(altura <= 0 || altura > 2.70) {
    alturaEhValido = false;
    paciente.classList.add("paciente-invalido");
    tdAltura.textContent = "Altura Inválida!";
}

var tdImc = paciente.querySelector(".info-imc");
if( pesoEhValido && alturaEhValido) {

    var imc = peso /  Math.pow(altura, 2);
    tdImc.textContent = imc.toFixed(2);

}

else{
    tdImc.textContent = "-"
}
}



var tdPeso  = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura  = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso /  Math.pow(altura, 2);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc.toFixed(2);
