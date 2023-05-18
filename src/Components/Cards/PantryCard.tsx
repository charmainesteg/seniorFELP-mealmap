import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function PantryCard({key, title,description, image, pantrylocation, url}: {key: number, title:string, description: string, image: string, pantrylocation: string, url: string}){
    return (
        <Card style={{ width: '18rem' }} key={key}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Link to={`${key}`}>
              <Card.Title> {title} </Card.Title>
            </Link>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Text>
              {pantrylocation}
            </Card.Text>
            <Card.Link href={url}>Find more info here</Card.Link>
          </Card.Body>
        </Card>
      );
}