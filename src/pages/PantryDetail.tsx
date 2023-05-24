import { useParams, useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";
import pantryData from "../assets/data/pantryData";
import "./PantryDetail.css"

const PantryDetail = () => {
  const { pantryId } = useParams();
  const parsedPantryId = pantryId ? parseInt(pantryId) : undefined;
  const pantry = pantryData.find((item) => item.id === parsedPantryId);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }


  if (!pantry) {
    return <div>Pantry not found </div>;
  }

  return (
    <div className="pantry-detail-container">
        <Button onClick={goBack}>Back</Button>
          <div className="container" key={pantry.id}>
      <div className="row">
        <div className="col-md-5">
          <div className="box">
            <h1 className="pantry-detail-title">{pantry.title}</h1>
            <p className="pantry-detail-description">{pantry.description}</p>
          </div>
          <div className="box">
            <p className="pantry-detail-location">{pantry.location}</p>
            <a className="pantry-detail-url" href={pantry.url}>
              Find more here
            </a>
          </div>
        </div>

        <div className="col-md-7">
          <img
            src={pantry.image}
            alt={pantry.title}
            className="pantry-detail-img"
          ></img>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default PantryDetail;
