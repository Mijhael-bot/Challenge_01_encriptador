let boton_copiar = document.querySelector("#copiar");
let boton_limpiar = document.querySelector("#limpiar");


function copiarTexto(){
    navigator.clipboard.writeText(result.textContent);
    texto_mensaje.textContent = ("Texto Copiado"); 
}
function limpiarTexto(){
    texto.value = "";
    texto_mensaje.textContent = ("");
}

boton_copiar.addEventListener("click",copiarTexto);
boton_limpiar.addEventListener("click",limpiarTexto);


