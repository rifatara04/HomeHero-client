import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import useAxios from "../Hooks/useAxios";
import ServiceCard from "../Components/ServiceCard";
import CleaningMade from "../Components/CleaningMade";
import HelpingThose from "../Components/HelpingThose";

const Home = () => {
  const [services, setServices] = useState([]);
  const instance = useAxios();

  useEffect(() => {
    instance.get("/top-rated-reviews").then((data) => {
      setServices([...data.data]);
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Banner />
      <h1 className="font-bold text-3xl text-base-content text-center mt-4">
        Top Rated Services
      </h1>
      <div
       className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mb-8">
        {services.map((service,idx) => (
          <ServiceCard key={service._id}  i={idx} service={service.service}/>
        ))}
      </div>
      <h1 className="font-bold text-3xl text-base-content text-center mt-4">
        Professional Cleaning Made Simple
      </h1>
      <CleaningMade />
      <h1 className="font-bold text-3xl text-base-content text-center mt-4">
        Helping Those Who Need It Most
      </h1>
      <HelpingThose />
    </div>
  );
};

export default Home;
