import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import bannerImg from "../../images/banner/banner-img.png";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const { services } = useServices();
  return (
    <div>
      {/* banner-part */}
      <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:gap-24">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Best <span className="text-green-400">Medical</span> And
              <span className="text-green-400 text-gray-900 dark:text-violet-400">
                {" "}
                Health{" "}
              </span>
              Care Center
            </h1>
            <p className="mt-6 mb-8 text-gray-400 text-lg sm:mb-12">
              This Med-City is one of the best medical and health care
              <br className="hidden md:inline lg:hidden" /> center in your area.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/appointment"
                id="appointment-btn"
                className="px-8 py-3 text-lg bg-green-300 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900"
              >
                Appointment
              </Link>
              <Link
                to="/"
                id="service-btn"
                className="px-8 py-3 text-green-400 text-lg font-semibold border border-gray-400 rounded dark:border-coolGray-100"
              >
                Services
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={bannerImg}
              alt=""
              id="img"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-coolGray-500"
            />
          </div>
        </div>
      </section>
      {/* services-part */}
      <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
        <div className="container mx-auto p-4 sm:p-10">
          <div className="mb-16 space-y-4 text-center">
            <p className="px-4 sm:px-8 lg:px-24">What We Do</p>
            <h1 className="text-4xl font-semibold leading-tight">
              We Offer Different Services To{" "}
              <span className="text-green-400">Improve Your Health</span>
            </h1>
          </div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
            {
                console.log(services),
                services.map((service) => (
                <Service key={service.id} service={service}></Service>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
