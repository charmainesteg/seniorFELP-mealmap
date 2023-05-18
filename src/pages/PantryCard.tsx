import React from "react";
import { Card } from "react-bootstrap";
import styles from './pantryCard.module.css';

type PantryProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  location: string;
  url: string;
};

type PantryCardProps = {
  data: PantryProps[];
};

export default function PantryCard(props: PantryCardProps) {
  const { data } = props;
  return (
    <>
      <div className="pantries">
        <h2 className="featured-text">Pantries</h2>
        <div className={styles.cards}>
          {
            data.map((item: any) =>
              <Card style={{ width: '18rem' }} key={item.id}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title> {item.title} </Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Card.Text>
                    {item.location}
                  </Card.Text>
                  <Card.Link href={item.url}>Find more info here</Card.Link>
                </Card.Body>
              </Card>)}
        </div>
      </div>
    </>);

}
