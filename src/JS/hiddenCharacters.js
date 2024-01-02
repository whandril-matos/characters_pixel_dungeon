document.addEventListener("DOMContentLoaded", function (){
    // define a class 
    class Pessoa {
       // Construtor to start the instance 
      constructor() {
          this.bT = document.querySelectorAll(".navLinkFade")
          this.bD = document.querySelectorAll(".fullBody")
          this.text = document.tag 
        }
    
        adicionarOuvintes() {
          this.bT.forEach((imagem, indice) => {
            imagem.addEventListener('click', () => {
              this.bodyInIdex(indice);
              this.ImgCop(indice);

            });
          });
        }
        
        ImgCop(indice){
          this.bD[indice].classList.add("onIndex")

        }

        bodyInIdex(indice) {
          this.onIndex = document.querySelector('.onIndex');
          this.onIndex.classList.remove('onIndex');
        }
    }
  
  //Creates an instance of the class
  const pessoa1 = new Pessoa();

  // Call the method of the class 
  pessoa1.adicionarOuvintes(); 


})