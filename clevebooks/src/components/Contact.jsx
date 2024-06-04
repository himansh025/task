import React from 'react';

const Contact = () => (
  <section id="contact" className="py-16  text-white bg-gray-900">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" className="w-full p-3 border rounded" placeholder="Your Name" />
        <input type="email" className="w-full p-3 border rounded" placeholder="Your Email" />
        <textarea className="w-full p-3 border rounded" placeholder="Your Message"></textarea>
        <button type="submit" className="bg-blue-400 text-white px-6 py-3 rounded">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
