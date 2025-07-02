import React, { useEffect, useRef, useState } from 'react';
// import './AutoSlider.css'; // For styling
import './styles.css'
const slidesData = [
    {
        image:'http://localhost:5173/src/assets/BeliefSat-0.jpg'
    },
    {
        image:'http://localhost:5173/src/assets/BeliefSat-0%20Launch.jpg'
    },
  {
    image: '/src/scenes/Slider/images/img1.jpeg',
  },
  {
    image: '/src/scenes/Slider/images/img2.jpeg',
  },
  {
    image: '/src/scenes/Slider/images/img3.jpeg',
  },
  {
    image: '/src/scenes/Slider/images/img4.jpeg',
  },
  {
    image: '/src/scenes/Slider/images/img5.jpeg',
  },
];

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 4000); // Auto-scroll every 4s
    return () => clearTimeout(timeoutRef.current);
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="content">
              <div id="blockLeft">
                <div id="imageContainerLeft">
                  <img src={slide.image} id="image" alt="Slide" />
                </div>
                {/* <div id="contentContainerLeft">
                  <h2>{slide.heading}</h2>
                  <p>{slide.content}</p>
                  <button>Read More</button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button id="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button id="next" onClick={nextSlide}>
        &#10095;
      </button>
    

    </div>
  );
};

export default AutoSlider;
