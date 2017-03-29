
function agregarLista(){
  var texto = document.getElementById("ingresarLista").value;
  var tituloLista = document.createElement("h2");
  var textoTitulo = document.createTextNode(texto);
  tituloLista.appendChild(textoTitulo);
  document.getElementById("nuevaLista").appendChild(tituloLista);

}

var listas = []; //creo un arreglo para ingresar las listas que se van creando, y poderlas borrar de acuerdo con el indice??

function crearPendiente(){

  var h5 = document.createElement("h5");
  var agregarPendiente = document.createTextNode("Agregar pendiente");
  h5.appendChild(agregarPendiente);
  document.getElementById("nuevaLista").appendChild(h5);

  var nuevoInput = document.createElement("input");
  var nuevoBoton = document.createElement("button");
  nuevoInput.type = "texto";
  nuevoInput.id = "inputPendiente";
  nuevoBoton.type = "button";
  nuevoBoton.id = "botonPendiente";
  var textoBoton = document.createTextNode("Crear Pendiente");
  nuevoBoton.appendChild(textoBoton);


  nuevoBoton.onclick = function listaDePendientes(){
                          var seccion = document.createElement("section");
                          var ul = document.createElement("ul");
                          ul.id = "lista";
                          var li = document.createElement("li");
                          var pendiente = document.getElementById("inputPendiente").value;
                          var listaPendiente = document.createTextNode(pendiente);
                          li.appendChild(listaPendiente);
                          ul.appendChild(li);
                          seccion.appendChild(ul);
                          document.getElementById("nuevaLista").appendChild(seccion);
                          // quiero borrar lo que guarda el input ----> pendiente.innerHTML = "";
                          var btnBorrarPendiente = document.createElement("button");
                          btnBorrarPendiente.type = "button";
                          btnBorrarPendiente.id = "borrarPendiente";
                          var textoBorrarPendiente = document.createTextNode("Borrar");
                          btnBorrarPendiente.appendChild(textoBorrarPendiente);
                          document.getElementById("lista").appendChild(btnBorrarPendiente);
                          btnBorrarPendiente.onclick = function pendienteBorrado(){
                                                        alert("ya no se que estoy haciendo :(");
                                                        }
                      }
  document.getElementById("nuevaLista").appendChild(nuevoInput);
  document.getElementById("nuevaLista").appendChild(nuevoBoton);
  botonBorrarLista();
}
function botonBorrarLista(){
  var btnBorrar = document.createElement("button");
  btnBorrar.type = "button";
  btnBorrar.id = "borrar";
  var textoBotonBorrar = document.createTextNode("Borrar");
  btnBorrar.appendChild(textoBotonBorrar);
  document.getElementById("nuevaLista").appendChild(btnBorrar);
  btnBorrar.onclick = function borrar(){
                        alert("borremos la lista!");
                      }
}
