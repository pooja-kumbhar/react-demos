import React from "react"
import ReactDOM from "react-dom"

const data=[{skill:"HTML",
level:"advance",
color:"red"},
{skill:"CSS",
level:"intermediate",
color:"blue"},
{skill:"JavaScript",
level:"advance",
color:"green"}];
function App() {
  return (
    <div className="App" style={{boxSizing:"border-box" , width:500 , height:500 }}>
      <DisplyImage/>
      <DisplyName/>
      <Introduction/>
      <Skills/>
    </div>
  );
}

function DisplyImage()
{
  return <img src="./images/MyPhoto.jpg" alt="MyPhoto" width={400} height={400} style={{display:"block"}}/>
}

function DisplyName()
{
  return<h2 style={{textTransform: "uppercase" }}>Pooja Kumbhar</h2>
}
function Introduction()
{
  return(
  <div style={{marginRight:10}}>
 <span>Frontend Developer having experience of 2 yeras. Hard working and passionate about work.Poositivie thinker 
    and in free time love cooking and reading</span>
  </div>)
  
}

function Skills()
{
  
  return( data.map(data=> <div className="Skills" style={{backgroundColor:data.color}}><span > {data.skill}</span> <span > {data.level}</span></div> ))
  
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


