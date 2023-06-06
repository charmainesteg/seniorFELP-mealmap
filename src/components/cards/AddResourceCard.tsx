import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import addResourcesData from '../../assets/data/addResourcesData';

function AddResourceCard() {
  return (
    <Card>
      <Card.Header as="h4">Additional Resources:</Card.Header>
      <ListGroup variant="flush">
       {addResourcesData.map((addResourcesData, index) => (
        <ListGroup.Item key={index}>
            <a href={addResourcesData.url} target="_blank" rel="noreferrer">{addResourcesData.title}</a>
        </ListGroup.Item>
       ))}
      </ListGroup>
    </Card>
  );
}

export default AddResourceCard;