function encriptar(){
    const textoEncriptado = encriptar(munieco.value);
    texto.value = textoEncriptado;
    munieco.value = "";

}
function foco() {
  document.getElementById("texto").focus();
}
function limpiar() {
  document.getElementById("texto").value = "";
  document.getElementById("munieco").value = "";
}


const letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;


function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let munieco = document.getElementById("munieco");
    if (texto.match(letras) != null){
      
      munieco.src = "./imagenes/muñeco.png";
       
      swal("Ooops!", "Solo letras minúsculas y sin acentos", "warning");
      
      document.getElementById(munieco).value = "";
      
    }
    
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("munieco").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      munieco.style.backgroundImage = "none";
      document.querySelector('.copiar').style.display = 'block';
     } else {
      munieco.src = "./imagenes/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  




function desencriptar(){
    const textoEncriptado = desencriptar(munieco.value);
    texto.value = textoEncriptado;
    munieco.value = "";
    
    
}


  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");

    if (texto.match(letras) != null){
      
      munieco.src = "./imagenes/muñeco.png";
       
      swal("Ooops!", "Solo letras minúsculas y sin acentos", "warning");
      
      document.getElementById(munieco).value = "";
      
    }
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("munieco").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        
        munieco.style.backgroundImage = "none";
        document.querySelector('.copiar').style.display = 'block';
        
      } else {
        munieco.src = "./imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
  }
 
  
  function btnCopiar(){
    let copiarTexto = document.getElementById("munieco");
    copiarTexto.select();
    document.execCommand("copy");
     
  }

  document.getElementById("botonCopiar").addEventListener("click", btnCopiar);




