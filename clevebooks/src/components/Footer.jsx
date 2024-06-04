
import React from "react";


const Footer = () => {


  const companyInfo = {
    name: "CleverBooks",
    copyright: "Copyright © 2024 CleverBooks Ltd.",
    address: "123 Main Street, City, Country",
  };

  return (
    <div className="bg-green-800 text-white  p-4">
      <div className="flex items-center">
        <img src="https://i.imgur.com/520zDfd.png" alt="Company Logo" className="w-16 h-auto" />
        <span className="text-3xl font-bold pl-2">{companyInfo.name}</span>
      </div>
      <div className="text-gray-400">{companyInfo.address}</div>
      <div className="text-gray-400">{companyInfo.copyright}</div>
     
   
    </div>
  );
};

export default Footer;
