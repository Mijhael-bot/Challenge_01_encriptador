let boton_desencriptar = document.querySelector("#desencriptar");

function desencriptardor(){
    var encriptado = texto.value;
    if(!verificarTexto()){
        if(!("" == texto.value.trim())){
            for(var i = 0; i < llaves.length; i++){
                encriptado = encriptado.replaceAll(llaves[i][1],llaves[i][0]);
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


boton_desencriptar.addEventListener("click",desencriptardor);
