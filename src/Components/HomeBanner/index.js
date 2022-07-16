import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImagePath from '../../ImagePath';

const Index = () => {
  const [slide, setSlide] = useState(0);
  const handleSelect = (slideIndex, e) => {
    setSlide(slideIndex);
  };
  const slider = [
    {
      slideHeading: 'First slide label',
      slideContent: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      slideImage: `${ImagePath.Banner}`,
      altText: 'First Slide'
    },
    {
      slideHeading: 'Second slide label',
      slideContent: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      slideImage: `${ImagePath.SecondBanner}`,
      altText: 'Second Slide'
    },
    {
      slideHeading: 'Third slide label',
      slideContent: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      slideImage: `${ImagePath.ThirdBanner}`,
      altText: 'Third Slide'
    },
  ]
  return (
    <div className='home-banner-wrap' >
      <Carousel activeIndex={slide} onSelect={handleSelect} >
        {
          slider.map((items, id) =>
            <Carousel.Item key={id}>
              <img
                className="d-block w-100"
                src={items.slideImage}
                alt={`${items.altText}`}
              />
              <Carousel.Caption>
                <h3>{items.slideHeading}</h3>
                <p>{items.slideContent}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        }
      </Carousel>
    </div>
  )
}


export default Index;