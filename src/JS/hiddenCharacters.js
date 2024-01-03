document.addEventListener("DOMContentLoaded", function (){
    // define a class 
    class Pessoa {
       // Construtor to start the instance 
      constructor() {
          this.bT = document.querySelectorAll(".navLinkFade")
          this.bD = document.querySelectorAll(".fullBody")
          this.text = document.querySelector(".rowText")
          this.imgC = document.querySelector(".rowImg")
        }
    
        adicionarOuvintes() {
          this.bT.forEach((imagem, indice) => {
            imagem.addEventListener('click', () => {
              this.bodyInIdex(indice);
              this.ImgCop(indice);
              this.scope();
              
              
              

            });
          });
        }
        
        ImgCop(indice){
          this.bD[indice].classList.add("onIndex")
          this.text.classList.add("onIndex")
          this.imgC.classList.add("onIndex")

        }

        bodyInIdex(indice) {
          this.onIndex = document.querySelectorAll('.onIndex');
          this.onIndex.forEach((elemento) => {
            elemento.classList.remove("onIndex");
          });
          
         
        }

        scope(){
          
        }
    }
  
  //Creates an instance of the class
  const pessoa1 = new Pessoa();

  // Call the method of the class 
  pessoa1.adicionarOuvintes(); 


})