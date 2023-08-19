import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

// Data
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
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
    <ul className="pizzas">
       { pizzaData.map(data=> <Pizza 
    name={data.name} photo={data.photoName} ingridients={data.ingredients} price={data.price}/>)}
   
        </ul>      
</div>)}

function Pizza(props)
{
    return (<div className="pizza">
        <img src={props.photo} alt={props.name}/>
        <li>
        <h3>{props.name}</h3>
        <p>{props.ingridients}</p>
        <span>{props.price}</span>
        </li>
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


