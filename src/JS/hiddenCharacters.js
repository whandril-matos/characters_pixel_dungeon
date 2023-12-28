document.addEventListener("DOMContentLoaded", function (){
    // define a class 
    class Pessoa {
       // Construtor to start the instance 
      constructor() {
          this.bT = document.querySelectorAll(".navLinkFade")
          this.bD = document.querySelectorAll(".fullBody")
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

    particlesJS('particles-bg', {
      particles: {
        number: {
          value: 800,
          density: {
            enable: true,
            value_area: 50
          }
        },
        color: {
          value: '#ff9900'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 100,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 10,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          direction: 'top', // Configura a direção do movimento
          speed: 10,
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });


})