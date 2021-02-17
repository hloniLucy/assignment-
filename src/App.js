import pic from './coin.jpg';
import './App.css';

import Crypto from './crypto';
function App() {
  return (
    <div className="home-style"> 
     <h1>
       Market Data </h1>
       <h2>Coins</h2>
     <Crypto />
    
       <img src={pic} className="pic"/>
    </div>
  );
}

export default App;

