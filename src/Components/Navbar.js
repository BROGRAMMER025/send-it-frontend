import React from 'react';
import './Navbar.css'; // Import your custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            SENDIT
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a href="/create-account" className="navbar-item">
              Create Account
            </a>
            <a href="/login" className="navbar-item">
              Log In
            </a>
            <a href="/create-order" className="navbar-item">
              Create Order
            </a>
            <a href="/change-destination" className="navbar-item">
              Change Destination
            </a>
            <a href="/cancel-order" className="navbar-item">
              Cancel Order
            </a>
            <a href="/order-details" className="navbar-item">
              Order Details
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
