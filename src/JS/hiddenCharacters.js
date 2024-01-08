document.addEventListener("DOMContentLoaded", function (){
// passo 1 - dar um jeito de pegar o elemento HTML dos botões
  const bt = document.querySelectorAll('.navLinkFade');
  const inSquare = document.querySelectorAll('.inBL');
  const fullBody = document.querySelectorAll('.fullBody');

  bt.forEach((inBt, indice) => {
      inBt.addEventListener('click', () => {
        hiddenHero()
        hiddenBackGround()

        showHero(indice)
        showBackGround()

      })
  })

  function showHero(indice){
    fullBody[indice].classList.add('atc')
  }

  function showBackGround(){
    inSquare.classList.add('onIndex');
  }

  function hiddenHero(){
    let hero = document.querySelectorAll('.atc');
    if (hero){
      hero.classList.remove('atc');
    }
    
  }
  function hiddenBackGround(){
    let backGround = document.querySelectorAll('.onIndex');
    backGround.classList.remove('onIndex');
    if (backGround){
      backGround.classList.remove('atc');
    }
  }



  
})