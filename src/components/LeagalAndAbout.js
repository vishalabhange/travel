import React from 'react';
import '../Css/LegalAndAbout.css'; // Import your CSS file

function LegalAndAbout() {
  return (
    <div className="legal-and-about-container">
      <h2 className="legal-and-about-heading">Legal & About</h2>
      <ul className="legal-and-about-list">
        <li className="legal-and-about-item">
          <h3 className="legal-and-about-item-heading">Terms of Service</h3>
          <p className="legal-and-about-item-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </p>
        </li>
        <li className="legal-and-about-item">
          <h3 className="legal-and-about-item-heading">Privacy Policy</h3>
          <p className="legal-and-about-item-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </p>
        </li>
        <li className="legal-and-about-item">
          <h3 className="legal-and-about-item-heading">About Us</h3>
          <p className="legal-and-about-item-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default LegalAndAbout;