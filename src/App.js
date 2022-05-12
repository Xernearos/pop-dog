import './App.css';
import cat from './cat.png'

function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <div className='Teams'>
          <a style={{color:'#FF7F7F'}}> Team Red </a>
        </div>
        <div className='Teams'>
          <a style={{color:'#ADD8E6'}}> Team Blue </a>
        </div>
        <div className='Teams'>
          <a style={{color:'#ffff80'}}> Team Yellow </a>
        </div>
      </div>
      <div className='Dog'>
        <img src={cat} style={{ width: '38%', height: '38%' }} /> 
      </div>
      <div className='Footer'>
        <a> Xernearos </a>
      </div>
    </div>
    
    
  );
}

export default App;
