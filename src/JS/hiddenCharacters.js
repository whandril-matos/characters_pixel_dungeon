

// document.addEventListener("DOMContentLoaded", function() {
//   // passo 1 - dar um jeito de pegar o elemento HTML dos botões
//   const bt = document.querySelectorAll('.navLinkFade');
//   const inSquare = document.querySelectorAll('.inBL');
//   const fullBody = document.querySelectorAll('.fullBody');

//   bt.forEach((inBt, indice) => {
//       inBt.addEventListener('click', () => {
//         hiddenHero()
//         hiddenBackGround()

//         showHero(indice)
//         showBackGround()

//       })
//   })

//   function showHero(indice){
//     fullBody[indice].classList.add('atc')
//   }

//   function showBackGround(){
//     inSquare.classList.add('onIndex');
//   }

//   function hiddenHero(){
//     // const hero = document.querySelectorAll('.atc');
//     // hero.classList.remove('atc');

//     let heroes = document.querySelectorAll('.atc');

//     if (heroes.length > 0) {
//       // Existe pelo menos um elemento com a classe '.atc'
//       Array.from(heroes).forEach(hero => {
//           hero.classList.remove('atc');
//       });
//     } else {
//         // Não há elementos com a classe '.atc'
//         console.log("Nenhum elemento com a classe '.atc' encontrado.");
//     }
    
    
//   }

//   function hiddenBackGround(){
//     // let backGround = document.querySelectorAll('.onIndex');
//     // backGround.classList.remove('onIndex');
//     // if (backGround){
//     //   backGround.classList.remove('atc');
//     // }
//     let heroes = document.querySelectorAll('.onIndex');

//     if (heroes.length > 0) {
//       // Existe pelo menos um elemento com a classe '.atc'
//       Array.from(heroes).forEach(hero => {
//           hero.classList.remove('onIndex');
//       });
//     } else {
//         // Não há elementos com a classe '.atc'
//         console.log("Nenhum elemento com a classe '.onIndex' encontrado.");
//     }

//   }




// });


document.addEventListener("DOMContentLoaded", function() {
  const bt = document.querySelectorAll('.navLinkFade');
  const txt = document.querySelectorAll('.txt');
  const fullBody = document.querySelectorAll('.fullBody');

  bt.forEach((inBt, indice) => {
      inBt.addEventListener('click', () => {
        hiddenHero()
        hiddenBackGround()

        showHero(indice)
        showBackGround(indice)
      })
  })

  function showHero(indice){
    fullBody[indice].classList.add('atc');
  }

  function showBackGround(indice){
    txt[indice].classList.add('onIndex');
  }

  function hiddenHero(){
    let heroes = document.querySelectorAll('.atc');
    if (heroes.length > 0) {
      Array.from(heroes).forEach(hero => {
          hero.classList.remove('atc');
      });
    } 
  }

  function hiddenBackGround(){
    let heroes = document.querySelectorAll('.onIndex');
    if (heroes.length > 0) {
      Array.from(heroes).forEach(hero => {
          hero.classList.remove('onIndex');
      });
    } 
  }
});
