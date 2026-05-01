import { useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import Stats from '../components/Stats';
import Card from '../components/Card';

export default function Home() {
  useEffect(() => {
    // Setup scroll reveal animations
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
      <HeroSlider />
      <Stats />

      <section className="reveal py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-lg">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-secondary mt-2">
              A Personality Shaped by Style and Machines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Who am I">
              I am someone who appreciates bold styling, refined engineering, and machines that command attention. I am drawn to cars that combine elegance, power, and emotion.
            </Card>
            <Card title="My Passion">
              Luxury cars aren't just transportation to me; they're works of art. The design, performance, and engineering excellence of premium vehicles inspire my passion daily.
            </Card>
            <Card title="What Drives Me">
              The feeling of acceleration, the precision of handling, and the premium quality of materials create an experience that's simply unmatched. That's what drives my love for these machines.
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
