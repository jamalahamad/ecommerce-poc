import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

 const CrouselHome = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src='https://www.srvmedia.com/wp-content/uploads/2024/04/E-commerce-Product_913x604.jpg' width="100%" height="300" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src='https://www.srvmedia.com/wp-content/uploads/2024/04/E-commerce-Product_913x604.jpg' width="100%" height="300" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src='https://www.srvmedia.com/wp-content/uploads/2024/04/E-commerce-Product_913x604.jpg' width="100%" height="300" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
export default CrouselHome
