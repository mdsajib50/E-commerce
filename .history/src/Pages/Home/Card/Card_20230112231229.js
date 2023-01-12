import React from 'react';
import { Link } from 'react-router-dom';
import cost from '../../../assets/cost.png';
const Card = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={cost} className=" rounded-xl shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Do you have something to sell?
Post your first ad and start making money!</p>
      <button className="btn btn-primary"><Link></Link></button>
    </div>
  </div>
</div>
    );
};

export default Card;
