import React from 'react';

const Features = () => (
  <section id="features" className="py-16 text-white bg-gray-900 ">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6  bg-blue-00 rounded border-solid border-2  border-gray-600  bg-blue-500 ">
          <h3 className="text-xl font-bold mb-2 ">Accurate Demand Forecasting</h3>
          <p >Dynamically predict future demand with unmatched accuracy.</p>
        </div>
        <div className="p-6 bg-blue-500 shadow  rounded border-solid border-2 border-gray-600  ">
          <h3 className="text-xl font-bold mb-2">Automated Purchase Planning</h3>
          <p>Automate your purchase order generation to optimize inventory.</p>
        </div>
        <div className="p-6 bg-blue-500 rounded shadow border-solid border-2 border-gray-600 ">
          <h3 className="text-xl font-bold mb-2">Custom Dashboards</h3>
          <p>Visualize data your way with customizable dashboards.</p>
        </div>
      </div>
    </div>
    
  </section>
);

export default Features;
