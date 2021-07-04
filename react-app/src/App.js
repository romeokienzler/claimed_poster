import logo from './logo.svg';
import './App.css';
import Slide from './Slide'
import { useState } from 'react'
import slide1 from './images/1_welcome.png'
import slide2 from './images/2_requirements.png'
import slide3 from './images/3_annotate.png'
import slide4 from './images/4_docker_kubernetes.png'
import slide5 from './images/5_kubeflow.png'
import slide7 from './images/7_elyra.png'
import slide8 from './images/8_claimed.png'
import slide9 from './images/9_aix.png'
import slide10 from './images/10_art.png'
import slide11 from './images/11_aif.png'
import slide12 from './images/12_openscale.png'
import slide13 from './images/13_mlx.png'
import slide14 from './images/14_summary.png'
import audio1 from './audio/1_welcome.mp3'
import audio2 from './audio/2_requirements.mp3'
import audio3 from './audio/3_annotate.mp3'
import audio4 from './audio/4_docker_kubernetes.mp3'
import audio5 from './audio/5_kubeflow.mp3'
import audio7 from './audio/7_elyra.mp3'
import audio8 from './audio/8_claimed.mp3'
import audio9 from './audio/9_aix.mp3'
import audio10 from './audio/10_art.mp3'
import audio11 from './audio/11_aif.mp3'
import audio12 from './audio/12_openscale.mp3'
import audio13 from './audio/13_mlx.mp3'
import audio14 from './audio/14_summary.mp3'

function playAudio() {
  console.log(document.getElementById('audio1'));
}


function App() {
  const [active, setActive] = useState(1);


  return (
    <div>
      <nav>
        <div>
          <button onClick={() => setActive(1)}>1</button>
          <button onClick={() => setActive(2)}>2</button>
          <button onClick={() => setActive(3)}>3</button>
          <button
            onClick={() => {
              setActive(4);
              playAudio();
            }}>
            4
          </button>
          <button onClick={() => setActive(5)}>5</button>
          <button onClick={() => setActive(7)}>7</button>
          <button onClick={() => setActive(8)}>8</button>
          <button onClick={() => setActive(9)}>9</button>
          <button onClick={() => setActive(10)}>10</button>
          <button onClick={() => setActive(11)}>11</button>
          <button onClick={() => setActive(12)}>12</button>
          <button onClick={() => setActive(13)}>13</button>
          <button onClick={() => setActive(14)}>14</button>
        </div>
      </nav>
      <div>
        {active === 1 && <div align="center"><audio id = "audio1" controls src={audio1} /><Slide index={slide1} /></div>}
        {active === 2 && <div align="center"><audio id = "audio2" controls src={audio2} /><Slide index={slide2} /></div>}
        {active === 3 && <div align="center"><audio id = "audio3" controls src={audio3} /><Slide index={slide3} /></div>}
        {active === 4 && <div align="center"><audio id = "audio4" controls src={audio4} /><Slide index={slide4} /></div>}
        {active === 5 && <div align="center"><audio id = "audio5" controls src={audio5} /><Slide index={slide5} /></div>}
        {active === 7 && <div align="center"><audio id = "audio7" controls src={audio7} /><Slide index={slide7} /></div>}
        {active === 8 && <div align="center"><audio id = "audio8" controls src={audio8} /><Slide index={slide8} /></div>}
        {active === 9 && <div align="center"><audio id = "audio9" controls src={audio9} /><Slide index={slide9} /></div>}
        {active === 10 && <div align="center"><audio id = "audio10" controls src={audio10} /><Slide index={slide10} /></div>}
        {active === 11 && <div align="center"><audio id = "audio11" controls src={audio11} /><Slide index={slide11} /></div>}
        {active === 12 && <div align="center"><audio id = "audio12" controls src={audio12} /><Slide index={slide12} /></div>}
        {active === 13 && <div align="center"><audio id = "audio13" controls src={audio13} /><Slide index={slide13} /></div>}
        {active === 14 && <div align="center"><audio id = "audio14" controls src={audio14} /><Slide index={slide14} /></div>}
      </div>
    </div>

  );
}

export default App;
