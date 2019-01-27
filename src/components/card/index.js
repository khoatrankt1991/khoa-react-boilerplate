import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const KCard = ({ title, desc, path }) => (
  <Card style={{ width: '100%', marginTop: '1rem' }}>
  <Card.Img variant="top" src={path} />
  <Card.Body>
    <Card.Title>{title || 'None'}</Card.Title>
    <Card.Text>
      {desc || 'None'}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
);

export default KCard;