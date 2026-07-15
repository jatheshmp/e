import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import products from '../product'; // Climbs out of componrnts into src, finds product.js
import ProductScreen from '../screen/ProductScreen'; // Climbs out of componrnts into src, drops down into screen

function Home() {
  return (
    <Container>
      <h1 className='text-center mt-4 mb-4 fw-bold'>Latest Products</h1>
      <Row>
        {products && products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={4} className="d-flex">
            <ProductScreen product={product}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
