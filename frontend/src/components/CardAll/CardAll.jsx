import React from "react";
import { Card } from 'react-bootstrap';

function BgColorExample() {
  return (
    <>
      {[
        'Primary',
      ].map((variant, index) => (
        <Card
          bg={variant.toLowerCase()}
          key={index}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ 
            width: 'flex',
            height: '6.5rem',
            background: '#3b3737',
            //'rgba(255, 0, 0, 0.5)', // Rojo transparente
            borderRadius: '10px',
            overflow: 'hidden',
            border: '2px solid #3b3737',
        }}
          className="mb-2"
        >
          <Card.Header>Estatus</Card.Header>
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text> En meta
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default BgColorExample;
