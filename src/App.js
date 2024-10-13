import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [data , setData] = useState(0)
  let [counter , setCounter] = useState(0)
  const handleChange = (e)=>{
    setData(e.target.value)
  }
  const handleIncrease = ()=>{
    setCounter(++counter)
  }
  const handleDecrease = ()=>{
    setCounter(--counter)
  }
  useEffect(()=>{
  
  }, [counter])
  return (
    <div className="App">
    <div>
    <p>{`${data.toString().padStart(2, '0')}${counter.toString().padStart(3, '0')}`}</p>
    <div>
    <span onClick={handleDecrease}>-</span>
    <span onClick={handleIncrease}>+</span>
    </div>
    </div>
      <input onChange={handleChange} type='text' />
    </div>
  );
}

export default App;
