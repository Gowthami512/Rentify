import './App.css';
import { Login } from './Login';
import { Home } from './components/Home';
import { useState } from 'react';
import { Seller } from './components/Seller';


function App() {
  const [login,setLogin]=useState(false);

  return (
    
    <>
    {/* <Seller /> */}
    {login? <Home /> :<Login setLogin={setLogin}/>}
    
    </>
  );
}

export default App;
