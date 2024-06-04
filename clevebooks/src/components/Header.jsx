import React, { Component } from 'react';
// import Dropdown from './Dropdown';

const Header = () => (
  <header className="bg-gray-900 text-white p-6 border-b-2 border-blue-400">
    <div className="container mx-auto flex justify-between items-center flex-wrap">
      <h1 className="text-2xl mr-3 font-bold">CleverBooks</h1>
      <div className="flex justify-evenly">
      <nav className="space-x-6">
        <a href="#features" className="hover:text-blue-400">Features</a>
        <a href="#testimonials" className="hover:text-blue-400">Testimonials</a>
        <a href="#integrations" className="hover:text-blue-400">Integrations</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
        {/* <Dropdown className="space-x-6"
          label="More"
          items={[
            { label: 'Features', href: '' },
            { label: 'Integrations', href: '' },
            { label: 'Testimonials', href: '' },
            { label: 'Contact', href: '' },
          ]}
        /> */}
        <a href="#" className="bg-blue-400 text-white px-4 py-2 rounded">Get Started</a>
        
      </nav>
      </div>
    </div>
  </header>
);

export default Header;

