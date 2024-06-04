import React from 'react';

const Testimonials = () => (
  <section id="testimonials" className="py-16 bg-gray-900 ">
    <div className="container text-gray-500 mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
      <div className="space-y-8">
        <div className="p-6 bg-gray-100 rounded shadow">
          <p>"Crest has transformed our workflow management and increased our efficiency tremendously!"</p>
          <p className="mt-4 font-bold">- Diksha Pande, Co-founder, Samosa Party</p>
        </div>
        <div className="p-6 bg-gray-100 rounded shadow">
          <p>"The integration and automation features are unparalleled, making our operations smoother."</p>
          <p className="mt-4 font-bold">- Kirti Goel, Co-founder, P-TAL</p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
