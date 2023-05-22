import {useParams} from "react-router-dom";
import pantryData from "../assets/data/pantryData";

 const PantryDetail = () => {
    const { pantryId } = useParams<{pantryId?:string}>();
    const parsedPantryId = pantryId ? parseInt(pantryId) : undefined;
    const pantry = pantryData.find((item) => item.id === parsedPantryId);

    if (!pantry){
        return <div>Pantry not found </div>;
    }

    return (

        <div key={pantry.id}>
            <h1>{pantry.title}</h1>
            <img src={pantry.image} alt={pantry.title}></img>
            <p>{pantry.description}</p>
            <a href={pantry.url}>Find more here</a>
            <p>{pantry.location}</p>
        </div>
    );
};

export default PantryDetail