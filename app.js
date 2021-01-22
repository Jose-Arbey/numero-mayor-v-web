let numeros = [];

let valorCampo = document.getElementById('valor_promedio');
let ingresar = document.getElementById('ingresar');
let texto_promedio = document.getElementById('texto-promedio');
let promedio = document.getElementById("promedio");
let reset = document.getElementById('reset');
let texto_posicion = document.getElementById('posicion-valor');

valorCampo.focus();
promedio.disabled=true;

promedio.addEventListener('click', calcularMayor)
ingresar.addEventListener('click', ingresarPromedio);
reset.addEventListener('click', comenzarDeNuevo);

function ingresarPromedio () {
  valorCampo.focus();
  if(valorCampo.value != ""){
    numeros.push(parseInt(valorCampo.value));
  }
  if (numeros.length === 10) {
    promedio.disabled = false;
    valorCampo.disabled = true;
    ingresar.disabled = true;
  }
  valorCampo.value = "";
  console.log(numeros);
}

function calcularMayor () {
  let numero_mayor = numeros[0];
  let i;
  let posicion_mayor = 0;
  for(i = 0; i < numeros.length; i++){
    if(numeros[i] > numero_mayor) {
      numero_mayor = numeros[i];
      posicion_mayor = i;
    }
  }

  texto_promedio.innerHTML = numero_mayor;
  texto_posicion.innerHTML = posicion_mayor;

  valorCampo.value = "";
  valorCampo.focus();
}

function comenzarDeNuevo () {
  texto_promedio.innerHTML= "0";
  numeros = [];
  valorCampo.value = "";
  valorCampo.disabled = false;
  ingresar.disabled = false;
  promedio.disabled=true;
  valorCampo.focus();
}






