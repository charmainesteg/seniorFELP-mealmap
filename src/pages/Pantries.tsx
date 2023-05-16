import React from "react";
import { Button } from "react-bootstrap";
import "./Pantries.css";
import PantryCard from "../components/cards/PantryCard";
import pantryData from "../assets/data/pantryData";
import "../components/cards/PantryCard.css"

const Pantries = () => {
    return (
        <article className="Pantries">
            <div className="hero-pantry-div">
                <section className="hero-pantry-header">
                    <h1 className="pantry-header-text">Find Local Pantries Here</h1>
                    <div className="pantry-header-btn-div">
                        <Button className="pantry-header-btn">
                            Locate a pantry near you
                        </Button>
                    </div>
                </section>
            </div>
            <div className="pantries">
                <h2 className="featured-text">Pantries</h2>
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
        </article>
    );
};

export default Pantries;
