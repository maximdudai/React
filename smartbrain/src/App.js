import React, { useCallback } from 'react';
import './App.css';

import Particles from 'react-particles';
import { loadFull } from 'tsparticles'

import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';
import ImageForm from './components/ImageForm/ImageForm';
import Rank from './components/UserRank/Rank';

function App() {
  const particlesInit = useCallback(async engine => {
      console.log(engine);
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      console.log(container);
  }, []);

  return (
    <div className="App">
       <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 150,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
      />

      <Navbar />
      <Logo />
      <div className='content mt-28 flex flex-col justify-center items-center'>
        <Rank />
        <ImageForm />
      </div>
    </div>
  );
}

export default App;
