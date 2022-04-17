import './App.css';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'; 
import React from 'react'
function App() {
  return (
    <div className="App">

      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.5}>
        <h2> Saikiran Belana</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
        <h2> Software Engineer</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
        <h2> San Jose, CA</h2>
        </ParallaxLayer>
      </Parallax>

    </div>
  );
}

export default App;
