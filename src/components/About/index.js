import './About.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {
  return (
    <>
        <div className='about-title'>
          <h1>About Pulpy Seed</h1>
        </div>
      <div className="about-everything">
        <div className='about-body'>
          <p>We believe in the importance of eating healthy fruits. We also understand that a busy day means you don't have time to wash and cut a watermelon yourself, so we do for you, and squeeze it into a recyclable bottle that you can quickly pull out of your fridge. 
          <br></br><br></br>

          Pulpy Seed: Bottled Up Health!</p>
        </div>

        <div className='about-bg'></div>

        </div>
        <div className='view-products-btn-container'>
          <Link to="/">
            <div className='view-products-btn'>
              <button>VIEW PRODUCTS</button>
            </div>
          </Link>
        </div>
    </>
  );
};