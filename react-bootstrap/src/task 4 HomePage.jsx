import React from 'react';
import { Button, Container, Card, Image } from 'react-bootstrap';
import welcomeImage from './assets/welcome-image.jpg';

const HomePage = () => {
  const homePageStyle = {
    backgroundColor: '#f8f9fa', 
    color: '#343a40', 
    padding: '20px',
    border: '1px solidrgb(231, 235, 239)',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  return (
    <Container style={homePageStyle} className="text-center mt-5">
      <Image src={welcomeImage} fluid rounded className="mb-4" />
      <h1>Welcome to Our Shopping Store</h1>
      <Button variant="primary" className="mt-3" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>Shop Now</Button>
      <Card className="mt-4" style={{ border: '1px solidrgb(231, 235, 239)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          <Card.Title>Featured Product</Card.Title>
          <Card.Text>
            Check out our latest featured product with amazing discounts!
          </Card.Text>
          <Button variant="secondary">Learn More</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HomePage;
