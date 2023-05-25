import PantryCard from "../components/cards/PantryCard";
import pantryData from "../assets/data/pantryData";
import "./HomePage.css";
import Button from "react-bootstrap/Button";
import "../components/cards/PantryCard.css";

const HomePage = () => {
  return (
    <article className="homepage">
      <div className="hero-div">
        <section className="hero-header">
          <h1 className="welcome-text">Welcome to Meal Map</h1>
          <h5 className="tagline">
            Meal Map provides a detailed list of pantries in the metro Atlanta
            Area and can help you locate pantries near you.
          </h5>
          <div className="home-btn-div">
            <a href="/pantries">
              <Button className="home-pantry-btn">Find More Pantries</Button>
            </a>
          </div>
        </section>
      </div>
      <div className="home-pantries">
        <h2 className="featured-text">Featured Pantries</h2>
        <div className="cards">
          {pantryData.map((item, index) => index < 6 && (
            <PantryCard
              key={item.id}
              id={item.id}
              title={item.title}
              description=""
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

export default HomePage;
