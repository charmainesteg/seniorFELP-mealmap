import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function AddResourceCard() {
  return (
    <Card>
      <Card.Header as="h4">Additional Resources:</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><a href="https://dfcs.georgia.gov/services/cash-assistance-medicaid-snap-andor-tanf-recipients">Cash Assistance to Medicaid, PeachCare for Kids, SNAP, and/or TANF Recipents</a></ListGroup.Item>
        <ListGroup.Item><a href="https://dfcs.georgia.gov/services/low-income-home-energy-assistance-program-liheap"> Low Income Home Energy Assistance Program {`(LIHEAP)`}</a></ListGroup.Item>
        <ListGroup.Item><a href="https://dfcs.georgia.gov/services/temporary-assistance-needy-families">Temporary Assistance for Needy Families</a></ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default AddResourceCard;