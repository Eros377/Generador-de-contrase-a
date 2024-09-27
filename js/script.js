document.addEventListener('DOMContentLoaded', inicio())
function inicio() {
  let longitud = document.getElementById('longitud');
  let agregarMinusculas = document.getElementById('agregarMinusculas');
  let agregarMayusculas = document.getElementById('agregarMayusculas');
  let agregarNumeros = document.getElementById('agregarNumeros');
  let agregarSimbolos = document.getElementById('agregarSimbolos');
  let btnGenerar = document.getElementById('btnGenerar');

  longitud.readonly = true;
  agregarMinusculas.checked = true;
  agregarMayusculas.checked = true;
  agregarNumeros.checked = true;
  agregarSimbolos.checked = true;

  btnGenerar.addEventListener('click', () => {
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';
    let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numeros = '0123456789';
    let simbolos = '!@#$%^&*()_+{}[]|:;"\'<>,.?/';
    let caracteresDisponibles = '';

    generar(
      minusculas,
      mayusculas,
      numeros,
      simbolos,
      caracteresDisponibles,
      longitud.value,
      agregarMinusculas.checked,
      agregarMayusculas.checked,
      agregarNumeros.checked,
      agregarSimbolos.checked
    );
  });

}

function generar(minusculas, mayusculas, numeros, simbolos, caracteresDisponibles, longitud, agregarMinusculas, agregarMayusculas, agregarNumeros, agregarSimbolos) {

  if (agregarMinusculas === true) {
    caracteresDisponibles += minusculas;
  }
  if (agregarMayusculas === true) {
    caracteresDisponibles += mayusculas;
  }
  if (agregarNumeros === true) {
    caracteresDisponibles += numeros;
  }
  if (agregarSimbolos === true) {
    caracteresDisponibles += simbolos;
  }

  if (caracteresDisponibles === '') {
    alert('Selecciona una opcion');
    return;
  }

  let contrasena = '';
  for (let i = 0; i < longitud; i++) {
    let indice = Math.floor(Math.random() * caracteresDisponibles.length);
    contrasena += caracteresDisponibles.charAt(indice);
  }

  document.getElementById('password').value = contrasena;
}