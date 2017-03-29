
function agregarLista(){
  var texto = document.getElementById("ingresarLista").value;
  var tituloLista = document.createElement("h3");
  var textoTitulo = document.createTextNode(texto);
  tituloLista.appendChild(textoTitulo);
  document.getElementById("nuevaLista").appendChild(tituloLista);
}
