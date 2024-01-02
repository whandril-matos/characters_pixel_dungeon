
 particlesJS('particles-bg', {
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          value_area: 100
        }
      },
      color: {
        value: '#ff9900'
      },
      shape: {
        type: 'image',
        image: {
          src: './src/CSS/assets/sPFire.png', // URL da imagem
          width: 500, // Largura da imagem
          height: 500, // Altura da imagem
        },
        polygon: {
          nb_sides: 1
        }
      },
      opacity: {
        value: 1,  // Opacidade inicial
        random: true,
        anim: {
          enable: true,
          speed: 1,  // Velocidade da animação
          opacity_min: 0,  // Opacidade mínima ao longo do percurso
          sync: false
        }
      },
      size: {
        value:350,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 200,
          sync: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        out_mode: 'bounce',
        enable: true,
        direction: 'top', // Configura a direção do movimento
        speed: 20,
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 100,
          rotateY: 12
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'grab'
        },
        onclick: {
          enable: false,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 1,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 4,
          size: 4,
          duration: 1,
          opacity: 8,
          speed: 10
        },
        repulse: {
          distance: 1,
          duration: 0.01
        },
        push: {
          particles_nb: 30
        },
        remove: {
          particles_nb: 1
        }
      }
    },
    retina_detect: false
  });
  