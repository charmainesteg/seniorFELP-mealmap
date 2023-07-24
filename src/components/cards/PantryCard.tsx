import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export type PantryProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  pantrylocation: string;
  url: string;
};

export default function PantryCard(props: PantryProps) {
  return (
    <Card style={{ width: "22rem" }} key={props.id}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body className="pantry-card-body">
        <Card.Title>
          {" "}
          <Link to={`/pantries/${props.id}`}> {props.title}</Link>{" "}
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.pantrylocation}</Card.Text>
        <Card.Link href={props.url} target="_blank">
          Find more info here
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
