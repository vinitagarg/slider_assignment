import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      { image: 'banner_1.jpg', alt: 'banner 1' },
      { image: 'banner_2.jpg', alt: 'banner 2' },
      { image: 'banner_3.jpg', alt: 'banner 3' }
    ];

    const prevSlide = () =>
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  const nextSlide = () =>
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);

    return (
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            className={`slide ${
              index === currentSlide ? 'active' : ''
            }`}
            key={index}
          >
            <img src={`banner/${slide.image}`} alt={slide.alt} />
          </div>
        ))}
         <button className="prev" onClick={prevSlide}>
        Prev
      </button>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
      </div>
    );
  };
  

export default ImageSlider;