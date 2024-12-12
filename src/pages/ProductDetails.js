import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import { display, width } from '@mui/system';
import { blue } from '@mui/material/colors';
import '../../src/App.css'



const ProductDetails = ({ products }) => {
    const { id } = useParams();

    // Check if products is defined and the id exists
    const location = useLocation();
    const { product } = location.state || {}; // Get the product from state

    if (!product) {
        return <div>Product not found!</div>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: false, // Ensure it's horizontal
      };
    return (
        <div class="flex-container">
        <div class="row horizontal">
          <div class="box">
          <div style={{ width: '80%', margin: '0 auto' }}>
          <Carousel>
      {product.images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index}`}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
          </div>
          <div class="box">
          <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
               <p><strong>Rating:</strong> {product.rating} ⭐</p>
              <p><strong>Discount:</strong> {product.discountPercentage}%</p>
               <div style={{ display: 'flex', gap: '10px' }}>
                  <Button variant="primary">Add to Cart</Button>
                 <Button variant="success">Buy Now</Button>
                </div>
          </div>
        </div>
        <div class="row full-width">
          <div class="box">
           { product.dimensions &&
            <p>
            <strong>Dimensions:</strong> Height: {product.dimensions.height} cm, Width: {product.dimensions.width} cm
          </p> 
          }
         <p><strong>Warranty:</strong> {product.warrantyInformation || 'No warranty available.'}</p>
         <p><strong>Shipping:</strong> {product.shippingInformation}</p>
         <p><strong>Availability Status:</strong> {product.availabilityStatus}</p>
          <p><strong>Return Policy:</strong> {product.returnPolicy}</p>

               <h3>Reviews</h3>
              {product.reviews.length === 0 ? (
                <p>No reviews yet.</p>
               ) : (
               product.reviews.map((review, index) => (
                   <div key={index} style={{ marginBottom: '20px' }}>
                     <h4>{review.user}</h4>
                    <div>{'⭐'.repeat(Math.round(review.rating))} ({review.rating})</div>
                    <p>{review.comment}</p>
                    <small>Reviewed on: {review.date}</small>
                  </div>
           ))
            )}
          </div>
        </div>
      </div>

    );
};

export default ProductDetails;
