import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { motion } from "motion/react";

const HelpingThose = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -100, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{once:true, amount: 0.3 }}
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-8">
      <div className="card bg-base-100 card-md shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
        <div className="card-body">
          <div>
            <IoIosHome className="text-4xl bg-primary text-base-100 rounded-md p-2" />
          </div>
          <h2 className="card-title text-xl">Home</h2>
          <p className="text-base-content">
            Providing essential support and resources to families and
            individuals, ensuring every home becomes a place of comfort, safety,
            and hope.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 card-md shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
        <div className="card-body">
          <div>
            <BsPersonWorkspace className="text-4xl bg-primary text-base-100 rounded-md p-2" />
          </div>
          <h2 className="card-title text-xl">Workspace</h2>
          <p className="text-base-content">
            Empowering communities by offering productive workspaces and
            opportunities, helping people grow skills, earn livelihoods, and
            achieve their potential.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 card-md shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
        <div className="card-body">
          <div>
            <FaStore className="text-4xl bg-primary text-base-100 rounded-md p-2" />
          </div>
          <h2 className="card-title text-xl">Store</h2>
          <p className="text-base-content">
            Making essential goods accessible to those in need, from groceries
            to daily necessities, so everyone can live with dignity and ease.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HelpingThose;
