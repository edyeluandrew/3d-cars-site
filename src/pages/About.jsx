import { useEffect } from 'react';
import Card from '../components/Card';

export default function About() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="reveal bg-light py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-lg">About Shivan</span>
              <h1 className="font-display text-5xl md:text-6xl font-black text-secondary mt-2 mb-6">
                More Than a Car Fan
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am someone who appreciates design, engineering, confidence, and the emotion that great cars bring. My love for luxury and performance is reflected in the brands I enjoy most: BMW, Mercedes-Benz, and Audi.
              </p>
            </div>
            <div className="reveal">
              <img
                src="/images/mercedes1.jpg"
                alt="Luxury car"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="reveal py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-lg">Who I Am</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-secondary mt-2">
              A Taste for Style, Power, and Presence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Personality">
              I am drawn to things that feel refined, bold, and memorable. I enjoy cars not just as machines, but as expressions of design, identity, and road presence.
            </Card>
            <Card title="What Stands Out">
              Aggressive front grilles, sharp headlights, premium interiors, and strong body lines are some of the details that make cars stand out to me most.
            </Card>
            <Card title="What Inspires Me">
              I admire cars that combine modern styling with performance and comfort. That mix of elegance and energy is what makes these brands so appealing to me.
            </Card>
          </div>
        </div>
      </section>

      {/* Why Cars Section */}
      <section className="reveal py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-lg">Why Cars</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-secondary mt-2">
              What Draws Me In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-display text-2xl font-bold text-secondary mb-4">Performance</h3>
              <p className="text-gray-700 leading-relaxed">
                Cars that feel powerful, responsive, and alive naturally stand out more. Performance gives a car presence and character.
              </p>
            </div>
            <div className="reveal bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-display text-2xl font-bold text-secondary mb-4">Design</h3>
              <p className="text-gray-700 leading-relaxed">
                A beautiful car turns heads. Premium design language, attention to detail, and thoughtful proportions matter deeply to me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Favorite Brands */}
      <section className="reveal py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-lg">Brands</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-secondary mt-2">
              My Favorite Automotive Brands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="BMW">
              Engineering precision meets sleek design. BMW represents the perfect balance of performance and elegance, with a focus on driver engagement and innovation.
            </Card>
            <Card title="Mercedes-Benz">
              Luxury and excellence define Mercedes. From powerful engines to premium interiors, every detail speaks of quality and sophistication.
            </Card>
            <Card title="Audi">
              Sophisticated styling combined with cutting-edge technology. Audi's commitment to design innovation and performance is truly admirable.
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
