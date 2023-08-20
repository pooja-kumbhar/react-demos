import './App.css';
import React from "react";

function App() {
 const [count, setCounter] = React.useState(1)
 const [step, setStep] = React.useState(1)

 const date= new Date("august 20 2023");
 date.setDate(date.getDate() + count)
 console.log(date.getDate())
  return (
  <>
 <div className="buttons">
    <button onClick={()=>setStep((c)=>c-1)}>-</button>
    <p>Step:{step}</p>
    <button onClick={()=>setStep((c)=>c+1)}>+</button>
    </div>

    <div className="buttons">
    <button onClick={()=>setCounter((c)=>c-step)}>-</button>
    <p>Count:{count}</p>
    <button onClick={()=>setCounter((c)=>c+step)}>+</button>
    </div>
    <p className="dateString">{date.toDateString()}</p>
  </>)
}


export default App;
