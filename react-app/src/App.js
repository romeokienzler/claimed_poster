import logo from './logo.svg';
import './App.css';
import Slide from './Slide'
import { useState } from 'react'
import slide1 from './images/img1.png'
import slide2 from './images/img2.png'
import slide3 from './images/img3.png'
import slide4 from './images/img4.png'
import audio1 from './audio/slide1.mp3';
import audio2 from './audio/slide2.mp3';
import audio3 from './audio/slide3.mp3';
import audio4 from './audio/slide4.mp3';





function App() {
  const [active, setActive] = useState(1)

  return (
    <div>
      <nav>
        <button onClick={() => setActive(1)}>1</button>
        <button onClick={() => setActive(2)}>2</button>
        <button onClick={() => setActive(3)}>3</button>
        <button onClick={() => setActive(4)}>4</button>
      </nav>
      <div>
        {active === 1 && <div align="center"><audio controls src={audio1} /><Slide index={slide1} /></div>}
        {active === 2 && <div align="center"><audio controls src={audio2} /><Slide index={slide2} /></div>}
        {active === 3 && <div align="center"><audio controls src={audio3} /><Slide index={slide3} /></div>}
        {active === 4 && <div align="center"><audio controls src={audio4} /><Slide index={slide4} /></div>}
      </div> 
    </div>

  );
}

export default App;
