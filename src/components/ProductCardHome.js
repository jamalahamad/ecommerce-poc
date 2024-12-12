import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductCardHome = ({products}) => {

  return (
    <div style={{margin: 10, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
    <Row xs={1} md={2} className="g-4">
        <Card>
          <Card.Img variant="top" src={products.thumbnail} width='100%' height = '100'/>
          <Card.Body>
            <Card.Title>{products.title}</Card.Title>
            <Card.Text>
             {products.description}
            </Card.Text>
          </Card.Body>
        </Card>
  </Row>
  </div>
  )
}

export default ProductCardHome