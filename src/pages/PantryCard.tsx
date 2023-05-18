import { Card } from "react-bootstrap";
import styles from './PantryCard.module.css';

export type PantryProps = {
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
      <div className={styles.card}>
        <h2 className={styles['featured-text']}>Pantries</h2>
        <div className={styles.cards}>

          {
            data.map((item: any) =>
              <Card style={{ width: '18rem' }} key={item.id}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body className={styles['card-body']}>
                  <div className={styles['pb-50']}>
                    <Card.Link className={styles['card-link']} href={item.url}> <Card.Title>{item.title}</Card.Title></Card.Link>
                    <Card.Text>{item.description}</Card.Text>
                  </div>
                  <Card.Text className={styles['card-address']}>{item.location}</Card.Text>
                  <Card.Link href={item.url} className={styles['card-link']}>Find more info here</Card.Link>
                </Card.Body>
              </Card>)}
        </div>
      </div>
    </>);

}
