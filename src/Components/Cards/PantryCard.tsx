import React from "react";
import { Card } from "react-bootstrap";

export default function PantryCard({key, title,description, image, pantrylocation, url}: {key: number, title:string, description: string, image: string, pantrylocation: string, url: string}){
    return (
        <Card style={{ width: '18rem' }} key={key}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Text>
              {pantrylocation}
            </Card.Text>
            <a href={url}>Find more info here</a>
          </Card.Body>
        </Card>
      );
}