
    tsParticles.load("tsparticles", {
      background: {
        color: {
          value: "#000000"
        }
      },
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 1,
          random: true
        },
        size: {
          value: 1.5,
          random: true
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          outModes: {
            default: "out"
          }
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          }
        },
        modes: {
          repulse: {
            distance: 80,
            duration: 0.4
          }
        }
      },
      detectRetina: true
    });
