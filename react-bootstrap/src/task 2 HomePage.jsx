import React from 'react';
import { Button, Container } from 'react-bootstrap';

const HomePage = () => {
  const homePageStyle = {
    backgroundColor: '#f8f9fa',
    color: '#343a40', 
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const shopButtonStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
  };


  return (
    <Container style={homePageStyle} className="text-center mt-5">
      <h1>Welcome to Our Shopping Store</h1>
      <Button variant="primary" className="mt-3" style={shopButtonStyle}>Shop Now</Button>
    </Container>
  );
};

export default HomePage;
