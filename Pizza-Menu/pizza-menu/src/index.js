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
    <>
    <p> Welcome😊Authentic Italian cuisine. Cantain variety of delicious😋 pizzas🍕 of your choice</p>
    <ul className="pizzas">
       { pizzaData.map(data=> <Pizza 
    name={data.name} photo={data.photoName} ingridients={data.ingredients} price={data.soldOut ?"Sold-Out":data.price}/>)}
   
        </ul> </>
         
</div>)}

function Pizza(props)
{
    if (props.soldOut) return null;
    
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
    const hour = new Date().getHours();
    const isOpen= hour >= 12  && hour <=22;

    console.log(hour, isOpen);
    return <footer className="footer">
        {isOpen ?(
        <Order/>):
    (<div> <p> We are Open until 22:00. Come visit us or order online.</p> 
     <button className="btn">Order</button>
     </div> )}
</footer>}

function Order(){
    return (<div className="order">
    <p> We are Open until 22:00. Come visit us or order online.</p> 
    <button className="btn">Order</button>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


