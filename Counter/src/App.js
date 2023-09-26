import './App.css';
import React from "react";

function App() {
 const [count, setCounter] = React.useState(0)
 const [step, setStep] = React.useState(1)

 function handleReset(){
  setCounter(0);
  setStep(1);
 }

 const date= new Date("august 20 2023");
 date.setDate(date.getDate() + count)
 console.log(date.getDate())
  return (
  <>
 <div className="buttons">
  <input type="range" min="0" max="10"
  value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
    <span>Step:{step}</span>
    
    </div>

    <div className="buttons">
    <button onClick={()=>setCounter((c)=>c-step)}>-</button>
    <p>Count:{count}</p>
    <button onClick={()=>setCounter((c)=>c+step)}>+</button>
    </div>
    <span className="dateString">{date.toDateString()}</span>
   
      {(count!==0 || step!==1) ?
       <div className="buttons">
      <button onClick={handleReset}>
        Resset
      </button>
    </div>: null}
  </>)
}


export default App;
