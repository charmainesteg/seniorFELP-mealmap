import "./Pantries.css";
import PantryCard from "../components/cards/PantryCard";
import pantryData from "../assets/data/pantryData";
import "../components/cards/PantryCard.css"

const Pantries = () => {
    return (
        <article>
            <div className="pantries">
                <h2 className="featured-text">Pantries</h2>
                <div className="cards">
                    {pantryData.map((item, index) => (
                        <PantryCard
                            key={item.id}
                            id={item.id}
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
