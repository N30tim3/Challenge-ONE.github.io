function codificar(){
    let texto = document.getElementById('codificartxt').value;
    let resultado = document.getElementById('resultado');
    
    let codigos = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat'], ['aimes', 'ai']]; 
    texto = texto.toLowerCase();
    
    for(let i = 0; i < codigos.length; i++){
      if(texto.includes(codigos[i][0])){
        texto = texto.replaceAll(codigos[i][0], codigos[i][1]);
      }
    }
      resultado.value = texto;
      decodificar.value = '';
  }
    
  function decodificar(){
    let texto = document.getElementById('decodificartxt').value;
    let resultado = document.getElementById('resultado');
    
    let codigos = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat'], ['aimes', 'ai']];
    texto = texto.toLowerCase();  
    
    for(let i = 0; i < codigos.length; i++){
      if(texto.includes(codigos[i][0])){
        texto = texto.replaceAll(codigos[i][1], codigos[i][0]);
      }
    }
      resultado.value = texto;
      codificar.value = '';
  }
  
  function copiar() {
          let textoCopiado = document.getElementById("resultado");
          textoCopiado.select();
          textoCopiado.setSelectionRange(0, 99999)
          document.execCommand("copy");
  }
  

  function resetear(){
    codificartxt.value = '';
    decodificartxt.value = '';
    resultado.value = '';
  }