import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router";
import useAuth from "../Hooks/useAuth";

const Footer = () => {
  const {theme} =useAuth();
  return (
    <footer className={`bg-neutral ${theme === "light" && "text-base-100"} p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}>
      <div>
        <h6 className="footer-title">
          {" "}
          <Link to="/" className="btn btn-ghost text-xl">
            <IoMdHome color="#2563eb" />{" "}
            <p className="text-base-100">
              Home
              <span className="text-primary">Hero</span>
            </p>
          </Link>{" "}
        </h6>
        <p>
          HomeHero is a modern web application that connects users with trusted
          local service providers such as electricians, plumbers, and cleaners.
          Users can browse services, book appointments, and leave ratings, while
          providers can manage their listings.
        </p>
      </div>
      <ul className="md:ml-auto lg:mx-auto">
        <h6 className="footer-title">Useful Links</h6>
        <li className="list-none link link-hover mb-2"> Blog </li>
        <li className="list-none link link-hover mb-2"> About Us </li>
        <li className="list-none link link-hover mb-2"> Terms & Condition </li>
        <li className="list-none link link-hover mb-2"> Privacy & Policy </li>
      </ul>

      <ul>
        <h6 className="footer-title">social links</h6>
        <li className="list-none link link-hover mb-2">
          {" "}
          <Link className="flex gap-2 items-center">
            <FaFacebook /> Facebook{" "}
          </Link>{" "}
        </li>
        <li className="list-none link link-hover mb-2">
          {" "}
          <Link className="flex gap-2 items-center">
            <FaSquareXTwitter /> Twitter
          </Link>{" "}
        </li>
        <li className="list-none link link-hover mb-2">
          {" "}
          <Link className="flex gap-2 items-center">
            <FaLinkedin /> Linkedin{" "}
          </Link>{" "}
        </li>
        <li className="list-none link link-hover mb-2">
          {" "}
          <Link className="flex gap-2 items-center">
            <FaInstagram /> Instagram
          </Link>{" "}
        </li>
      </ul>
      <p className="text-center mt-7 pt-7 md:col-span-2 lg:col-span-3 border-t">
        Copyright © 2025 - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
