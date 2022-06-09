let texto = document.querySelector(".texto");
let boton_encriptar = document.querySelector("#encriptar");
var result = document.querySelector(".resultado");
let esperando = document.querySelector(".espera");
let copia = document.querySelector(".copiar");
let alert = document.querySelector(".alerta");
var texto_mensaje = document.querySelector(".mensaje");

//caracteres no permitidos
var caracteres = /[A-Záéíóú]/;
//llaves de encriptado
const llaves = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
//funcion para encriptar el texto
function verificarTexto(){
    var valido = caracteres.test(texto.value);
    return valido;
}
//aparese los estilos 
function estilos(tipo){
    if(tipo == 1){
        result.style.display = "block"
        esperando.style.display  = "none";
        copia.style.display  = "block";
        alert.style.color = "gray";
        texto_mensaje.textContent = ("");
    }else{
        esperando.style.display  = "initial";
        copia.style.display  = "none";
        result.style.display = "none";
        alert.style.color = "red";
        texto_mensaje.textContent = ("");
    }
}
//
function encriptar() {
    var encriptado = texto.value;
    if(!verificarTexto()){
        if(!("" == texto.value.trim())){
            for(var i = 0; i < llaves.length; i++){
                encriptado = encriptado.replaceAll(llaves[i][0],llaves[i][1]);
            }
            
            estilos(1);
            result.textContent = (encriptado);
        }else{
            estilos(2);
        }   
    }else{
        estilos(2);
    }

    
     
    
}

boton_encriptar.addEventListener("click",encriptar);


