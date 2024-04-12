import React from 'react';
import '../Css/CustomerServices.css'; // Import your CSS file

function CustomerServices() {
  return (
    <div className="customer-services-container">
      <h2 className="customer-services-heading">Customer Services</h2>
      <ul className="customer-services-list">
        <li className="customer-services-item">
          <h3 className="customer-services-item-heading">FAQ</h3>
          <p className="customer-services-item-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </p>
        </li>
        <li className="customer-services-item">
          <h3 className="customer-services-item-heading">Contact Us</h3>
          <p className="customer-services-item-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default CustomerServices;