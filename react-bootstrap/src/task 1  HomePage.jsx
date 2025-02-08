import React from 'react';
import { Button, Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Our Shopping Store</h1>
      <Button variant="primary" className="mt-3">Shop Now</Button>
    </Container>
  );
};

export default HomePage;
