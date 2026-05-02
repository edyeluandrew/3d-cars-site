import { useState, useEffect } from 'react';

export default function HeroSlider() {
  const slides = ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-screen bg-cover bg-center overflow-hidden">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Luxury car slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-2xl">
          <span className="text-primary font-medium text-lg mb-4 block">
            Car Enthusiast • Luxury • Performance
          </span>
          <h1 className="font-display text-6xl md:text-7xl font-black leading-tight mb-6">
            Hello, I'm <span className="text-primary">Edyelu Andrew</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            I'm passionate about beautiful machines, strong design, premium presence, and the feeling that comes with great cars. BMW, Mercedes-Benz, and Audi are some of the brands I admire most.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/about"
              className="bg-primary text-black font-bold px-8 py-3 rounded hover:bg-primary-hover transition-all"
            >
              About Me
            </a>
            <a
              href="/contact"
              className="border-2 border-primary text-primary font-bold px-8 py-3 rounded hover:bg-primary hover:text-black transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={handlePrev}
        className="slider-button prev"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="slider-button next"
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </section>
  );
}
