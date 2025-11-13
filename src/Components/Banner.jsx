import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import electricianImg from "../assets/electrician.jpg";
import plumberImg from "../assets/plumber.jpg";
import homeCleaningImg from "../assets/home-cleaning-service.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="my-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          {" "}
          <div className="max-h-[600px] w-full overflow-hidden px-12 flex flex-col lg:flex-row justify-center items-center">
            {" "}
            <div className="content md:h-1/2 lg:w-1/3 m-2">
              <h1 className="font-bold text-xl lg:text-2xl text-base-content">
                Power Up Your Home with Trusted Electricians
              </h1>
              <p className=" py-2 text-lg">
                Get quick and safe electrical repairs from certified
                professionals. From wiring issues to light installations — we’ve
                got you covered.
              </p>
              <Link to="/service" className="btn btn-primary">
                Explore more
              </Link>
            </div>
            <div className=" mx-auto">
              <img src={electricianImg} alt="" />
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="max-h-[600px] w-full overflow-hidden px-12 flex flex-col lg:flex-row justify-center items-center">
            {" "}
            <div className="content md:h-1/2 lg:w-1/3 m-2">
              <h1 className="font-bold text-xl lg:text-2xl text-base-content">
                Reliable Plumbing Solutions, Anytime
              </h1>
              <p className=" py-2 text-lg">
                Say goodbye to leaks and clogs. Our skilled plumbers handle
                everything from small repairs to full bathroom installations —
                fast and efficiently.
              </p>
              <Link to="/service" className="btn btn-primary">
                Explore more
              </Link>
            </div>
            <div className="flex-1">
              <img src={plumberImg} alt="" />
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="max-h-[600px] w-full overflow-hidden px-12 flex flex-col lg:flex-row justify-center items-center">
            {" "}
            <div className="content md:h-1/2 lg:w-1/3 m-2">
              <h1 className="font-bold text-xl lg:text-2xl text-base-content">
                A Clean Home, Without the Hassle
              </h1>
              <p className=" py-2 text-lg">
                Enjoy a spotless home with professional cleaners you can trust.
                Book today and relax while we take care of the mess.
              </p>
              <Link to="/service" className="btn btn-primary">
                Explore more
              </Link>
            </div>
            <div className="flex-1">
              <img src={homeCleaningImg} alt="" />
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
