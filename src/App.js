import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import logoFanny from './images/fanny-logo-white.png';
import { useState } from 'react';



function App() {
  
  const[numClick,setnumClick]= useState(0);

  const startClick = () =>{
    setnumClick(numClick + 1);
  };

  const restartClick = () => {
    setnumClick(0);
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
        className='logo'
        src={logoFanny} 
        alt='Logo' />
      </div>
      <div className='principal-container'>
        <Counter 
        clickNum={numClick} />

        <Button
        text='Click'
        isClickButton={true}
        clickDrive={startClick} />

        <Button
        text='Restart'
        isClickButton={false}
        clickDrive={restartClick} />
      </div>
    </div>
  );  
}

export default App;
