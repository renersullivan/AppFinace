function insert(num) {
  var numero = document.getElementById("saldo").innerHTML;
  document.getElementById("saldo").innerHTML = numero + num;
}
function clean() {
  document.getElementById("saldo").innerHTML = "";
}
function back() {
  var resultado = document.getElementById("saldo").innerHTML;

  document.getElementById("saldo").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
