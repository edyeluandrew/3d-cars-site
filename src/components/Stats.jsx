import { useEffect, useRef } from 'react';

export default function Stats() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '3', label: 'Favorite Brands' },
    { number: '9+', label: 'Featured Car Images' },
    { number: '1', label: 'Passion for Luxury & Performance' },
    { number: '100%', label: 'Love for Automotive Design' },
  ];

  return (
    <section ref={statsRef} className="reveal py-16 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="reveal bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="font-display text-4xl font-black text-primary mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
