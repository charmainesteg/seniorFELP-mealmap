import React from "react";
import PantryCard from "../components/cards/PantryCard";
import pantryData from "../assets/data/pantries";
import "./HomePage.css";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  return (
    <div>
      <section className="hero-header container">
        <h1 className="welcome-text">Welcome to Meal Map</h1>
        <div className="home-btn-div">
          <Button className="home-pantry-btn">Find More Pantries</Button>
        </div>
      </section>
      <h2 className="featured-text">Featured Pantries</h2>
      <div className="cards">
        {pantryData.map((item, index) => (
          <PantryCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            pantrylocation={item.location}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
