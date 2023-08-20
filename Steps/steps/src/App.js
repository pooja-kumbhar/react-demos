import React from "react";

const messages=["Learn React🧑‍🎓","Apply for Jobs 👩‍💻", "Invest your new income💵🤑"];

export default function App(){
  
  const [step, setStep]=React.useState(1);

  function handlePrivious(){ step>1 && setStep(step-1)}

  function handleNext(){ step <3&& setStep(step+1)}

  return <div className="steps">
    <div className="numbers">
      <div className={step>=1?"active":""}>1</div>
      <div className={step>=2?"active":""}>2</div>
      <div className={step>=3?"active":""}>3</div>
    </div>

    <p className="message">Step {step}: {messages[step-1]} </p>

    <div className="buttons">
      <button style={{backgroundColor:"#7950f2", color:"fff"}} onClick={handlePrivious}>Privious</button>
      <button style={{backgroundColor:"#7950f2", color:"fff"}} onClick={handleNext}>Next</button>
    </div>
  </div>
}