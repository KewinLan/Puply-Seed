import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


export default function Header() {
  return (
    <>
      <div className="bgHeader">
        <nav>
          <div className="bgHeaderLogo">
            <Link to="/">
              <img src="images/FullLogo.png" className="PulpySeedLogo" alt="Pulpy Seed Logo" width="206" height="161" />
            </Link>
          </div>
          <div className="bgHeaderLinks">
            <div className="bgHeaderHome">
              <Link to="/">Home</Link>
            </div>

            <div className="bgHeaderAbout">
              <Link to="/about">About Us</Link>
            </div>
            <div className="bgHeaderCart">
              <Link to="/cart">
                <div className="bgHeaderCartIcon">
                  <FaShoppingCart />
                </div>
                Cart
              </Link>
            </div>
            <div className="bgHeaderContact">
              <Link to="/contactus">Contact Us</Link>
            </div>
            <div className="bgHeaderShadow"></div>
          </div>
        </nav>
      </div>
    </>
  );
};