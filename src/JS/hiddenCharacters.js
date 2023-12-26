document.addEventListener("DOMContentLoaded", function (){
    // define a class 
    class Pessoa {
        // Construtor to start the instance 
        constructor() {
            this.bT = document.querySelectorAll(".navLinkFade")
            this.bD = document.getElementsByClassName("fullBody")
        }
    
        adicionarOuvintes() {
            this.bT.forEach((imagem, indice) => {
              imagem.addEventListener('click', () => {
                this.lidarCliqueNaImagem(indice);
              });
            });
          }
        
          lidarCliqueNaImagem(indice) {
            alert('Clicou na imagem com índice ' + indice);
            // Adicione aqui o código que deseja executar quando uma imagem for clicada
          }
    }
  
    //Creates an instance of the class
    const pessoa1 = new Pessoa();
  
    // Call the method of the class 
    pessoa1.adicionarOuvintes(); 


})