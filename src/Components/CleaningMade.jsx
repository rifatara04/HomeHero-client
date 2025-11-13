import React from "react";
import garageImg from "../assets/garage-cleaning.avif";
import gardenImg from "../assets/garden-cleaning.avif";
import homeImg from "../assets/Home-cleaning.webp";

const CleaningMade = () => {
  return (
    <div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-8"
    >
      <div className="card bg-base-100 shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
        <figure className="p-6">
          <img src={homeImg} alt="Home img" className="rounded-xl" />
        </figure>
        <div className="card-body pt-0">
          <h2 className="card-title text-xl">Home Cleaning</h2>
          <p className="text-base-content">
            Keep your living space fresh and spotless with our complete home
            cleaning service. From dusting and mopping to kitchen and bathroom
            sanitization — we make your home shine like new.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Booking Now</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
        <figure className="p-6">
          <img src={gardenImg} alt="garden img" className="rounded-xl" />
        </figure>
        <div className="card-body pt-0">
          <h2 className="card-title text-xl">Garden Cleaning</h2>
          <p className="text-base-content">
            Maintain a healthy and beautiful garden with our professional
            cleaning and maintenance team. We remove dry leaves, trim overgrown
            plants, and ensure your outdoor space stays fresh and inviting.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Booking Now</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
        <figure className="p-6">
          <img src={garageImg} alt="garage img" className="rounded-xl" />
        </figure>
        <div className="card-body pt-0">
          <h2 className="card-title text-xl">Garage Cleaning</h2>
          <p className="text-base-content">
            Say goodbye to clutter and dirt buildup in your garage. Our expert
            cleaners organize tools, remove grease stains, and make your garage
            safe, clean, and easy to use again.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Booking Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningMade;
