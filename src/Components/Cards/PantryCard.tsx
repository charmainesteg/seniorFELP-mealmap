import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function PantryCard({id, title,description, image, pantrylocation, url}: {id: number, title:string, description: string, image: string, pantrylocation: string, url: string}){
    return (
        <Card style={{ width: '18rem' }} key={id}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
              <Card.Title> <Link to={`/pantries/${id}`}> {title}</Link> </Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Text>
              {pantrylocation}
            </Card.Text>
            <Card.Link href={url} target="_blank">Find more info here</Card.Link>
          </Card.Body>
        </Card>
      );
}