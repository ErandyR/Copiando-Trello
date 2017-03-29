
function agregarLista(){
  var texto = document.getElementById("ingresarLista").value;
  var tituloLista = document.createElement("h2");
  var textoTitulo = document.createTextNode(texto);
  tituloLista.appendChild(textoTitulo);
  document.getElementById("nuevaLista").appendChild(tituloLista);
}
function crearPendiente(){
  var nuevoInput = document.createElement("input");
  var nuevoBoton = document.createElement("button");
  nuevoInput.type = "texto";
  nuevoInput.id = "inputPendiente";
  nuevoBoton.type = "button";
  nuevoBoton.id = "botonPendiente";
  nuevoBoton.onclick = function listaPendiente(){
                        alert("funciona!!");
                      }
  var textoBoton = document.createTextNode("Agregar Pendiente");
  nuevoBoton.appendChild(textoBoton);
  document.getElementById("nuevaLista").appendChild(nuevoInput);
  document.getElementById("nuevaLista").appendChild(nuevoBoton);
}
