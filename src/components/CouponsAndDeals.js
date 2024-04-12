import React from "react";
import "../Css/CouponsAndDeals.css";
import Sidebar from "./SideBar";

const CouponsAndDeals = () => {
  // Dummy data for coupons and deals
  const couponsAndDeals = [
    {
      id: 1,
      title: "Special Offer",
      description: "Get 20% off on all orders!",
    },
    {
      id: 2,
      title: "Limited Time Deal",
      description: "Buy 1, Get 1 Free on selected items.",
    },
    {
      id: 3,
      title: "Flash Sale",
      description: "Hurry! Up to 50% off on electronics.",
    },
    // Add more dummy coupons and deals as needed
  ];

  return (
    <div className="coupons-and-deals-page">
      <Sidebar couponsAndDeals={couponsAndDeals} />

      <div className="coupons-and-deals-content">
        <h2>Coupons and Deals</h2>
        <div className="coupons-and-deals-container">
          {couponsAndDeals.map((item) => (
            <div key={item.id} className="coupon-deal-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button>Claim Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouponsAndDeals;
