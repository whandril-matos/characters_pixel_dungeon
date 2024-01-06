document.addEventListener("DOMContentLoaded", function (){
  //   // define a class 
  //   class Pessoa {
  //      // Construtor to start the instance 
  //     constructor() {
  //         this.bT = document.querySelectorAll(".navLinkFade")
  //         this.bD = document.querySelectorAll(".fullBody")
  //         this.text = document.querySelector(".rowText")
  //         this.imgC = document.querySelector(".rowImg")
  //       }
    
  //       adicionarOuvintes() {
  //         this.bT.forEach((imagem, indice) => {
  //           imagem.addEventListener('click', () => {
  //             this.bodyInIdex(indice);
  //             this.ImgCop(indice);
     

  //           });
  //         });
  //       }
        
  //       ImgCop(indice){
  //         this.bD[indice].classList.add("onIndex")
  //         this.text.classList.add("onIndex")
  //         this.imgC.classList.add("onIndex")
          
  //       }

  //       bodyInIdex(indice) {
  //         this.onIndex = document.querySelectorAll('.onIndex');
          
  //         this.onIndex.forEach((elemento) => {
  //           console.log(elemento)
  //           elemento.classList.remove("onIndex");
  //           console.log(elemento)
            
  //         });
 
  //       }
        

  //   }
  
  // //Creates an instance of the class
  // const pessoa1 = new Pessoa();

  // // Call the method of the class 
  // pessoa1.adicionarOuvintes(); 
  
  const bT = document.querySelectorAll(".navLinkFade")
  const bD = document.querySelectorAll(".fullBody")
  const text = document.querySelector(".rowText")
  const imgC = document.querySelector(".rowImg")
 
  function adicionarOuvintes() {
    bT.forEach((imagem, indice) => {
      imagem.addEventListener('click', () => {
        bodyInIdex(indice);
        ImgCop(indice);

      });
    });
  }
  function ImgCop(indice){
    text.classList.add("onIndex")
    imgC.classList.add("onIndex")
    bD[indice].classList.add("onIndex")
    
      
  }
  function bodyInIdex() {
    let onIndex = document.querySelectorAll('.onIndex');
    onIndex.forEach((elemento) => {
      elemento.classList.remove("onIndex");
      
    });
    
    console.log(onIndex)
  }
  function main(){
    bodyInIdex()
    adicionarOuvintes()
  }
  main()

})