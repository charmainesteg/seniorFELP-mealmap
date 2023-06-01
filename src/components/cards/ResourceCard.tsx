import Card from 'react-bootstrap/Card';

export type ResourceProps = {
id: number;
title: string;
text: string;
header: string;
}; 

function ResourceCard(props: ResourceProps) {
  return (
    <Card className="resource-card">
      <Card.Header as="h3">{props.header}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ResourceCard;