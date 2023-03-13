import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.thetoychronicle.com/wp-content/uploads/2021/09/POP-MART-X-Pucky-What-are-the-Fairies-Doing-Blind-Box-Series-The-Toy-Chronicle-2021-.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.thetoychronicle.com/wp-content/uploads/2022/03/POP-MART-x-Ayan-Deng-Dimoo-World-WHERE-WE-GO-Blind-Box-Series-The-Toy-Chronicle-2022-.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thetoychronicle.com/wp-content/uploads/2022/11/SKULLPANDA-x-POP-MART-The-Warmth-Blind-Box-Series-.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;