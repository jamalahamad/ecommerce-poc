import React, {useState} from "react";
import useFetchAxios from "../Api/useFetchAxios";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ProductCardList = () => {
  const apiUrl = "https://dummyjson.com/products";
  const { data, loading, error } = useFetchAxios(apiUrl);

 
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data.products || data.products == null) return <p>Loading</p>;
  const products = data.products

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };


  const ExpandableDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div>
        <p>
          {isExpanded ? description : `${description.substring(0, 50)}...`}
        </p>
        <Button
          variant="link"
          style={{ padding: 0, textDecoration: 'underline' }}
          onClick={handleToggle}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </div>
    );
  };

  return (
    <Container fluid style={{ marginTop: '20px' }}>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Link style={{ textDecoration: 'none' }} to={`/product/${product.id}`} state={{ product }}>
            <Card className="h-100" >
              <Card.Img variant="top" src={product.thumbnail} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  <strong>Brand:</strong> {product.brand} <br />
                  <strong>Price:</strong> ${product.price} <br />
                  <strong>Discount:</strong> {product.discountPercentage}% <br />
                  <strong>Rating:</strong> {product.rating} ⭐
                </Card.Text>
                <ExpandableDescription description={product.description} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button variant="primary">Add to Cart</Button>
                  <Button variant="success">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCardList;
