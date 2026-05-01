import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formMessage, setFormMessage] = useState('');
  const [messageType, setMessageType] = useState('');

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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setFormMessage('Please fill in all fields.');
      setMessageType('error');
      return;
    }

    setFormMessage('Message sent successfully!');
    setMessageType('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setFormMessage(''), 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="reveal bg-secondary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-primary font-semibold text-lg">Contact</span>
          <h1 className="font-display text-5xl md:text-6xl font-black mt-2 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl">
            Reach out for conversation, collaboration, or simply to talk about luxury cars, design, and performance.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="reveal py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="reveal">
              <h2 className="font-display text-4xl font-black text-secondary mb-6">
                Reach Out to Me
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Feel free to send a message. Whether it is about cars, design, ideas, or just connecting, this is the right place to do it.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-display text-xl font-bold text-secondary mb-2">Email</h3>
                  <p className="text-gray-600">ayebareshivan@abcd.com</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-display text-xl font-bold text-secondary mb-2">Phone</h3>
                  <p className="text-gray-600">+256 7xx xxx xxx</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-display text-xl font-bold text-secondary mb-2">Location</h3>
                  <p className="text-gray-600">Uganda</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-display text-xl font-bold text-secondary mb-4">Why Reach Out?</h3>
                <p className="text-gray-700">
                  You can connect for general conversation, collaboration, shared interests, or simply a good discussion around style, performance, and modern automotive design.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal">
              <h2 className="font-display text-4xl font-black text-secondary mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold text-secondary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Write your message here"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-primary-hover transition-all"
                >
                  Send Message
                </button>

                {formMessage && (
                  <p
                    className={`text-center font-semibold ${
                      messageType === 'error' ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {formMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
