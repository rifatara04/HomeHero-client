import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import ServiceCard from "../Components/ServiceCard";
import { FaFilter } from "react-icons/fa";
import { toast } from "react-toastify";

const Services = () => {
  const instance = useAxios();
  const [services, setServices] = useState([]);
  useEffect(() => {
    instance.get("/services").then((res) => {
      setServices([...res.data]);
    });
  }, []);

  const handleFilter = e => {
    e.preventDefault();
    const minPrice = e.target.minPrice.value;
    const maxPrice = e.target.maxPrice.value;
    instance.get(`/filter-services?minPrice=${minPrice}&maxPrice=${maxPrice}`)
    .then(res => {
        setServices([...res.data]);
    }).catch(err => {
        toast.error(err.code)
    })
  }

  
  return (
    <>
      <h1 className="font-bold text-3xl text-base-content text-center mt-1 mb-3">
        All Services
      </h1>
      <form onSubmit={handleFilter} className="my-4 flex gap-5 flex-col md:flex-row">
        <input type="number" placeholder="min value" className="input" name="minPrice" required />
        <input type="number" placeholder="max value" className="input" name="maxPrice" required />
        <button className="btn btn-primary"><FaFilter /> filter by price</button>
      </form>

      {
        services.length > 0 ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard data={service} key={service._id} />
        ))}
      </div> : <h1 className="font-bold text-3xl text-base-content text-center mt-1 mb-3">
        Services Is Not Available
      </h1>
      }
    </>
  );
};

export default Services;
