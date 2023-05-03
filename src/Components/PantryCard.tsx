import React from "react";
import { Card } from "react-bootstrap";

export default function PantryCard({title,text}: {title:string, text: string}){
    // const title = props.title
    // const text = props.text
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}