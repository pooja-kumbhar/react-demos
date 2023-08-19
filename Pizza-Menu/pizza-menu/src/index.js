import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

function App()
{
    return ( <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
        </div>  );
   
}
function Menu(){return (<div className="menu">
    <h2>Our Menu</h2>
    <Pizza 
    name="Pizza Margarita" photo="pizzas/margherita.jpg" ingridients="cheese" price="10"/>
       
</div>)}

function Pizza(props)
{
    return (<div className="pizza">
        <img src={props.photo} alt={props.name}/>
        <div>
        <h3>{props.name}</h3>
        <p>{props.ingridients}</p>
        <span>{props.price}</span>
        </div>
    </div>)
}

function Header(){
    const style= {}
    return <header className="header"><h1 style={style} >
    Fast React Pizza Co.
</h1></header>
}


function Footer(){ 
    const hour = new Date().getHours;

    (hour > 9  && hour < 22)? alert("We are Open :)") : alert(" Sorry:( We are Closed")

    return <footer className="footer">
    {new Date().toLocaleTimeString()}. We are currently Open..
</footer>}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


