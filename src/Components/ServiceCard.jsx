import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const ServiceCard = ({ data, i ,service}) => {
  const { serviceName, _id, description, serviceImg, price } = data || service || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="card bg-base-100 shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105"
    >
      <figure>
        <img src={serviceImg} alt={serviceName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{serviceName}</h2>
        <p className="text-base-content font-semibold">{description}</p>
        <p className="text-base-content font-semibold text-lg">${price}</p>
        <Link to={`/service-details/${_id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
