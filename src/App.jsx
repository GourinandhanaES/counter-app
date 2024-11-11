import './App.css';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux' 
import { increment, decrement, reset, incrementByAmount } from './redux/counterSlice';

function App() {
  const [amount,setAmount] = useState(0)
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()

  const handleIncrementAmount = ()=>{
    if(amount){
      //dispatch function
      dispatch(incrementByAmount(+amount))
    }else{
      alert("Please enter a valid amount!!!")
    }
  }

  return (
    <div className="app">
      <h1>Counter App</h1>
      <div className="counter-container">
        <h2>{count}</h2>
        <div className="button-group">
          <button onClick={()=>dispatch(decrement())} className="btn decrement">DECREMENT</button>
          <button onClick={()=>dispatch(reset())} className="btn reset">RESET</button>
          <button onClick={()=>dispatch(increment())} className="btn increment">INCREMENT</button>
        </div>
        <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='Enter the amount to be Incremented'/>
        <button onClick={handleIncrementAmount} className="btn increment-by-amount">INCREMENT BY <br /> AMOUNT</button>
      </div>
    </div>
  );
}

export default App;

