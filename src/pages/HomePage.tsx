import React from "react";
import PantryCard from "../components/cards/PantryCard";
import pantryData from "../assets/data/pantries";
import './HomePage.css'




const HomePage = () =>{
    
    
    return (
        <div>
            <section className="hero">
            <div className="overlay"></div>
            <img src="../images/homepageimg.jpeg" alt="A girl holding a bowl of food" className="homepage-img"></img>
            <h2>Featured Pantries</h2>
            <div className="cards">
            {pantryData.map((item, index) => (
                <PantryCard key= {item.id} title={item.title} description={item.description} image={item.image} pantrylocation={item.location} url={item.url} />
            ))}
            </div>
            </section>
        </div>
    )
};

export default HomePage